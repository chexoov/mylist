//Перехват запросов
import axios from "axios";
import { useAuthStore } from "./stores/user";

// изменяем запрос request
axios.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    // Query-параметры
    let params = new URLSearchParams();
    
    params.append('auth', authStore.userInfo.token);
    config.params = params;
    return config;
});