import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref("Artur");

  const changeUsername = () => {
    user.value = "Ainur";
  };

  return { user, changeUsername };
});

export const useTest = defineStore("test", () => {
  const test = ref(1);

  const changeTest = (newValue) => {
    test.value = newValue;
  };

  return { test, changeTest };
});

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE;

export const useAuthStore = defineStore("auth", () => {
  const userInfo = ref({
    token: "",
    email: "",
    userId: "",
    refreshToken: "",
    expiresIn: "",
  });
  const error = ref("");
  const auth = async (payload, type) => {
    const stringUrl = type === "signup" ? "signUp" : "signInWithPassword";
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`,
        {
          ...payload,
          returnSecureToken: true,
        }
      );
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn,
      };

      // чтобы при обновлении страницы сайт не разлогинивался, сохроняем их в локальном хранилище (дефтулс - приложения - локальное хронилище )
      localStorage.setItem(
        "userToken",
        JSON.stringify({
          token: userInfo.value.token,
          refreshToken: userInfo.value.refreshToken,
          expiresIn: response.data.expiresIn,
        })
      );
    } catch (err) {
      switch (err.response.data.error.message) {
        case "EMAIL_EXISTS":
          error.value = "Email  exists";
          break;
        case "OPERATION_NOT_ALLOWED":
          error.value = "Operation not allowed";
          break;
        default:
          error.value = "Error";
          break;
      }
      throw error.value;
    }
  };
  return { auth, userInfo, error };
});
