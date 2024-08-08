import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// ломается воспроизведение других компонентов при включенном импорте 
// import './api'

import App from './App.vue'
import router from './router'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyeuTJ1zvVzLkXrKvzFQTZ85bW37f97tg",
  authDomain: "jwt-firebase-vue3-fd2b5.firebaseapp.com",
  projectId: "jwt-firebase-vue3-fd2b5",
  storageBucket: "jwt-firebase-vue3-fd2b5.appspot.com",
  messagingSenderId: "371291653807",
  appId: "1:371291653807:web:110ecd5f93ee56de7b365a"
};
// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}




app.use(router)
app.use(createPinia())

app.mount('#app')



