//Перехват запросов
import axios from "axios";
import { useAuthStore } from "./stores/user";
import router from "./router";

const axiosApiInstance = axios.create();

// изменяем запрос request
axiosApiInstance.interceptors.request.use((config) => {
  const url = config.url;
  if (!url.includes("signInWithPassword") && !url.includes("signUp")) {
    const authStore = useAuthStore();
    // Query-параметры
    let params = new URLSearchParams();

    params.append("auth", authStore.userInfo.token);
    config.params = params;
  }
  return config;
});

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE;

// функция для того чтобы нас не выкидывало когда истекает срок refreshToken он обычно идет один час
// response - когда приходит ответ на запрос , принимаем (response) ответ от сервера
axiosApiInstance.interceptors.response.use(
  (response) => {
    // возвращаем response если все окей
    return response;
    // но если ошибка
  },
  async function (error) {
    const authStore = useAuthStore();
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await axios.post(
          `https://securetoken.googleapis.com/v1/token?key=${apiKey}`,
          {
            // по документации firebase - grant_type должен быть написан так:
            grant_type: "refresh_token",

            refresh_token: JSON.parse(localStorage.getItem("userToken"))
              .refreshToken,
          }
        );
        console.log("newTokens", newToken.data);
        authStore.userInfo.token = newToken.data.access_token;
        authStore.userInfo.refreshToken = newToken.data.refresh_token;
        localStorage.setItem(
          "userToken",
          JSON.stringify({
            token: newToken.data.access_token,
            refreshToken: newToken.data.refresh_token,
          })
        );
        // ошибка на случай взлома или подмены токена
      } catch (_error) {
        console.log(_error);
        localStorage.removeItem("userToken");
        router.push("/SignIn");
        authStore.userInfo.token = "";
        authStore.userInfo.refreshToken = "";
      }
    }
    console.log(error);
  }
);

export default axiosApiInstance;
