<template>
  <header class="bg-cyan-100 text-black shadow-lg relative flex flex-col">
    <div class="container mx-auto flex items-center justify-between h-14 px-4">
      <a href="" class="flex items-center">
        <img
          class="h-12"
          src="https://papik.pro/grafic/uploads/posts/2023-04/1681513528_papik-pro-p-logotip-panda-vektor-41.png"
          alt=""
        />
        <span class="ml-4 uppercase font-black">Chexoov</span>
      </a>
      <div class="cursor-pointer lg:hidden">
        <el-dropdown>
          <el-button type="primary">
            <el-icon><House /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="/home">
                  <span>Главная</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/portfolio">
                  <button>Обо мне</button>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/project">
                  <span>Проекты</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/contackt">
                  <span>Контакты</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/blog">
                  <span>Блог</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/Promise">
                  <span>Тест</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/TestTwo">
                  <span>Тест 2</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/HomeView">
                  <span>Регистрация</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link v-if="tokens" @click.prevent="logout" to="/SignIn">
                  <span>Выход</span>
                </router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <nav class="font-semibold text-base lg:text-lg hidden lg:block">
        <ul class="mx-auto flex items-center">
          <li class="p-5 xl:p-8 active">
            <router-link to="/home">
              <span>Главная</span>
            </router-link>
          </li>
          <li class="p-5 xl:p-8">
            <router-link v-if="tokens" to="/portfolio">
              <button>Обо мне</button>
            </router-link>
          </li>
          <li class="p-5 xl:p-8">
            <router-link to="/project">
              <span>Проекты</span>
            </router-link>
          </li>
          <li class="p-5 xl:p-8">
            <router-link to="/contackt">
              <span>Контакты</span>
            </router-link>
          </li>
          <li class="p-5 xl:p-8">
            <router-link to="/blog">
              <span>Блог</span>
            </router-link>
          </li>
          <li class="p-5 xl:p-8">
            <router-link to="/Promise">
              <span>Тест</span>
            </router-link>
          </li>
          <li class="p-5 xl:p-8">
            <router-link to="/TestTwo">
              <span>Тест 2</span>
            </router-link>
          </li>
          <li class="p-5 xl:p-8">
            <router-link v-if="!tokens" to="/HomeView">
              <span>Регистрация</span>
            </router-link>
          </li>
          <li class="p-5 xl:p-8">
            <router-link v-if="tokens" @click.prevent="logout" to="/SignIn">
              <span>Выход</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import router from "@/router";
import {useAuthStore} from "../stores/user"
import { computed } from "vue";

const tokens = computed(() => 
  authStore.userInfo.token
)

const authStore = useAuthStore()

// сохраняем в локальное хранилище информацию о пользователе
const checkUser = () => {
  const token = JSON.parse(localStorage.getItem('userToken'))
  if (token) {
    authStore.userInfo.token = token.token
    authStore.userInfo.refreshToken = token.refreshToken
    authStore.userInfo.expiresIn = token.expiresIn
  }
}

const logout = () => {
  authStore.logout()
  localStorage.removeItem('userToken')
  router.push('/SignIn')
}

checkUser()
</script>
