<template>

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
    class=" items-center mt-5 btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300"
  >
    <span class="relative">Краткая Ифа</span>
  </button>
  <ul v-if="openPortfolio">
    <li
      v-for="title in infoPortofolio"
      :key="title.id"
      class="flex justify-between w-2/3 mx-1 mt-1 bg-gray-200 font-bold text-black py-2 px-10 rounded-xl hover:bg-gray-300"
    >
      {{ title.id }} . {{ title.name }}
      <el-tooltip 
        class="box-item"
        effect="dark"
        :content="title.Tooltip"
        placement="right"
        :visible="tooltipVisibility[title.id]">
        
        <el-icon :size="17" :color="'#409EFF'">
          <InfoFilled 
            @mouseenter="tooltipVisibility[title.id] = true"
            @mouseleave="tooltipVisibility[title.id] = false"
            class="items-end"
          />
        </el-icon>
      </el-tooltip>
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
       Данные с  глобального хранилища: {{ user.user }}
     <button @click="user.changeUsername">Изменить имя</button>
     <p> Данные с  глобального хранилища 2: {{ test.test }} </p>
     <button @click="test.changeTest(5)" > Изменить тест </button>

      <!-- component -->
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { ref } from "vue";
import {useUserStore} from '../stores/user'
import {useTest} from '../stores/user'

const user = useUserStore()
const test = useTest()
const openPortfolio = ref(false);
const openButton = ref(false);
const openButtonToo = ref(false);

const tooltipVisibility = reactive({});


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
  { id: 1, name: "Живу в Казани" , Tooltip: "Казань третья столица России" },
  { id: 2, name: "Занимаюсь спортом", Tooltip: "Арнольд в молодости"},
  { id: 3, name: "Имеется военник",Tooltip: "Проблем не будет " },
  { id: 4, name: "Не судим", Tooltip: "Порядочный гражданин" },
  { id: 5, name: "Никого не сдавал - Крысой не являюсь", Tooltip: "Правда" },
];


infoPortofolio.forEach(item => {
  tooltipVisibility[item.id] = false;
});


</script>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>

