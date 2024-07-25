<template>
<header class="bg-cyan-100 text-black shadow-lg  md:block relative flex flex-items-center ">
  <div class="container mx-auto flex items-center h-14">
    <a href="" class="flex items-center justify-center">
      <img class="h-12" src="https://papik.pro/grafic/uploads/posts/2023-04/1681513528_papik-pro-p-logotip-panda-vektor-41.png" alt="" />
      <span class="ml-4 uppercase font-black">Chexoov</span>
    </a>
    <nav class="contents font-semibold text-base lg:text-lg">
      <ul class="mx-auto flex items-center">
        <li class="p-5 xl:p-8 active">
          <router-link to="/home">
            <span>Главная</span>
          </router-link>
        </li>
        <li class="p-5 xl:p-8">
          <router-link to="/portfolio">
            <button @click="() => emit('addPortfolio')" >Обо мне</button>
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
      </ul>
    </nav>
    <button class="border border-black rounded-full font-bold px-8 py-2">Contact me</button>
  </div>
</header>
</template>

<script setup>


const emit = defineEmits(['addPortfolio'])   

</script>