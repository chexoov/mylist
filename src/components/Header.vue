<template>

<header class="bg-cyan-100 text-black shadow-lg hidden md:block">
  <div class="container mx-auto flex items-center h-24">
    <a href="" class="flex items-center justify-center">
      <img class="h-16" src="https://papik.pro/grafic/uploads/posts/2023-04/1681513528_papik-pro-p-logotip-panda-vektor-41.png" alt="" />
      <span class="ml-4 uppercase font-black">Chexoov</span>
    </a>
    <nav class="contents font-semibold text-base lg:text-lg">
      <ul class="mx-auto flex items-center">
        <li class="p-5 xl:p-8 active">
          <a href="">
            <span>Главная</span>
          </a>
        </li>
        <li class="p-5 xl:p-8">
          <a href="#">
            <button @click="() => emit('addPortfolio')" >Обо мне</button>
          </a>
        </li>
        <li class="p-5 xl:p-8">
          <a href="">
            <span>Проекты</span>
          </a>
        </li>
        <li class="p-5 xl:p-8">
          <a href="">
            <span>Контакты</span>
          </a>
        </li>
        <li class="p-5 xl:p-8">
          <a href="">
            <span>Блог</span>
          </a>
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