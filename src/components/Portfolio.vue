<template>
  <div
    class="flex fixed items-start mx-2 mt-5 justify-center bg-gradient-to-br hover:opacity-100 transition hover:-translate-y-1"
  >
    <div
      class="bg-white font-black text-center rounded-3xl border shadow-lg max-w-xs flex flex-col"
    >
      <img
        class="mb-3 w-25 h-25 mt-5 rounded-xl mx-4 shadow-lg"
        src="../assets/photo/IMAGE.png"
        alt="product designer"
      />
      <h1 class="text-lg text-gray-700">Хадиуллин Артур</h1>
      <h3 class="text-sm text-gray-400">frontend Вeveloper</h3>
      <p class="text-xs text-gray-400 mt-4">
        Кто никогда не совершал ошибок, тот никогда не пробовал ничего нового.
      </p>
      <button
        class="mb-5 w-1/2 m-auto flex animate-bounce justify-center text-center bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
      >
        Hire Me
      </button>
    </div>
  </div>
  <div
    class="flex relative mt-5 bg-white w-auto max-w-5xl m-auto rounded-xl shadow-xl mb-2 overflow-auto"
>

    <img
      class="place-items-start  mx-5 my-5 w-[500px] h-auto max-h-[700px] static rounded-xl shadow-2xl"
      src="../assets/photo/24802901-0878-48D7-A196-80997918694A_1_105_c.jpeg"
      alt=""
    />
    <div class="flex flex-col">
      <button
        @click="togglePortfolio"
        class="items-center mt-5 btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping  transition-all duration-300"
      >
        <span class="relative">Краткая Ифа</span>
      </button>
      <ul v-if="openPortfolio">
        <li
          v-for="title in infoPortofolio"
          :key="title.id"
          class="flex w-2/3 mx-1 mt-1 bg-gray-200 font-bold text-black py-2 px-10 rounded-xl"
        >
          {{ title.id }} . {{ title.name }}
        </li>
      </ul>
      <button
        @click="toggleButton"
        class="items-center mt-5 btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300"
      >
        <span class="relative">Пояснить за Шмотки</span>
      </button>
      <ul
        v-if="openButton"
      >
        <li
          v-for="item in items"
          :key="item.id"
          class="flex w-2/3 mx-1 mt-1 bg-gray-200 font-bold text-black py-2 px-10 rounded-xl"        >
          {{ item.name }} : {{ item.tooltip }}
        </li>
      </ul>
      <button
        class="items-center mt-5 btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300"
      >
        <span class="relative">
          <a
            href="https://yandex.ru/maps/43/kazan/house/ulitsa_salikha_batyyeva_5/YEAYdANmS0YAQFtvfXt0c31rZQ==/?ll=49.246236%2C55.752182&source=serp_navig&z=16.65"
            >Точная геолокация</a
          >
        </span>
      </button>
      <button
        @click="toggleButtonToo"
        class="items-center mt-5 btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300"
      >
        <span class="relative">Инфа по Образованию</span>
      </button>
      <ul
        v-if="openButtonToo"
              >
        <li
          v-for="itemsToo in itemToo"
          :key="itemsToo.id"
          class="flex w-2/3 mx-1 mt-1 bg-gray-200 font-bold text-black py-2 px-10 rounded-xl"
        >
          {{ itemsToo.name }} : {{ itemsToo.tooltip }}
        </li>
      </ul>
      <p class=" sticky bottom-0 my-5 px-5">Я бы с удовольствием пригласил тебя зайти и выпить, но боюсь, что ты согласишься.</p>
      <!-- component -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openPortfolio = ref(false);
const openButton = ref(false);
const openButtonToo = ref(false);

const togglePortfolio = () => {
  openPortfolio.value = !openPortfolio.value;
}
const toggleButton = () => {
  openButton.value = !openButton.value;
};

const toggleButtonToo = () => {
  openButtonToo.value = !openButtonToo.value;
};

const items = [
  { id: 1, name: "Солнцезащитные очки", tooltip: "Armani Exchange" },
  { id: 2, name: "Мужская рубашка", tooltip: "С Robert Graham" },
  { id: 3, name: "Брюки классические", tooltip: "TOMMY HILFIGER" },
  { id: 4, name: "Кроссовки", tooltip: " Reebok pump" },
];

const itemToo = [
  { id: 1, name: "Школа", tooltip: "9 классов" },
  { id: 2, name: "Колледж", tooltip: "4 года" },
  { id: 3, name: "Университет", tooltip: "3.5 года" },
];

const infoPortofolio = [
  { id: 1, name: "Живу в Казани" },
  { id: 2, name: "Занимаюсь спортом" },
  { id: 3, name: "Имеется военник" },
  { id: 4, name: "Не судим" },
  { id: 5, name: "Люблю путешествовать" },
];
</script>
