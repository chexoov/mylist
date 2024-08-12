<template>
  <div class="flex items-center mx-auto w-1/2">
    <el-carousel
      :interval="5000"
      type="card"
      height="300px"
      indicator-position="outside"
      class="w-full mx-auto mt-5"
    >
      <el-carousel-item
        v-for="item in imgItem"
        :key="item"
        class="w-full h-full"
      >
        <img
          class="w-full h-full object-cover"
          :src="item.url"
          alt="Изображение"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
  <el-affix :offset="120">
    <div class="flex flex-col items-end lg:items-end my-5 mx-5">
      <button
        @click="openDrawer"
        class="border border-black bg-orange-200 rounded-full font-bold px-5 py-2"
      >
        <el-icon><Shop /></el-icon>
      </button>
    </div>
  </el-affix>

  <DrowerTest v-if="isDrowerOpen" @closeDrower="closeDrawer" />

  <div class="flex flex-col items-center xl:flex-row lg:flex-row">
    <el-card
      style="max-width: 480px"
      v-for="item in imgItem"
      :key="item"
      class="mr-4 text-center"
    >
      <template #header>
        <h2 class="text-sm truncate">
          {{ item.title }}
        </h2>
      </template>
      <img :src="item.url" class="w-full" />
      <template #footer>
        <div class="flex flex-col justify-center syz-4 m-auto">
          ${{ item.price }}
          <button
            @click="creatOrder(item)"
            class="border border-black bg-red-200 rounded-full font-bold"
          >
            <h2>Купить</h2>
          </button>
        </div>
      </template>
    </el-card>
  </div>

  <div
    class="flex items-center overflow-auto h-96 relative max-w-lg my-5 mx-auto lg:mx-5 bg-white dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex-col divide-y dark:divide-slate-200/5"
  >
    <h2 class="text-2xl mx-auto">Отзывы</h2>
    <div v-for="items in comitUser" :key="items">
      <div
        class="flex px-2 rounded-2xl items-center relative bg-white my-2 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
      >
        <img :src="items.Photo" alt="" class="w-[150px] rounded-full" />

        <div class="flex flex-col overflow-auto">
          <p class="mx-5 text-red-600">{{ items.name }}</p>
          <p class="line-clamp-2 mx-5 text-blue-700">{{ items.Feedback }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- component -->
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th class="px-6 py-4">#</th>
                <th class="px-6 py-4">Фото</th>
                <th class="px-6 py-4">Товар</th>
                <th class="px-6 py-4">Цена</th>
              </tr>
            </thead>

            <tbody v-for="item in imgItem" :key="item">
              <tr
                class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td class="whitespace-nowrap px-6 py-4 font-medium">
                  {{ item.id }}
                </td>
                <td class="">
                  <img :src="item.url" alt="" class="w-[40px]" />
                </td>
                <td class="whitespace-nowrap px-6 py-4">{{ item.title }}</td>
                <td class="whitespace-nowrap px-6 py-4">${{ item.price }}</td>
                <el-button
                  @click="creatOrder(item)"
                  type="danger"
                  class="whitespace-nowrap px-6 py-4"
                >
                  Купить
                </el-button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!meaningFirebase">
    <el-card
      v-for="firebase in itemFirebase"
      :key="firebase"
      style="max-width: 480px"
    >
      <template #header>Данные с firebase</template>
      <p>{{ firebase.Name }}</p>
      <p>{{ firebase.Type }}</p>
      <p>{{ firebase.Test }}</p>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DrowerTest from "./DrowerTest.vue";
import axios from "axios";
import  axiosApiInstance  from "../api";

import { useAuthStore } from "../stores/user";

// firebase

// еще добавили interceptors в папке  api.js для перехвата запроса , но он вырубает отоброжение других элементов , если получится починить нужно починить сылку
// https://jwt-firebase-vue3-fd2b5-default-rtdb.europe-west1.firebasedatabase.app/TestTwo.json

const itemFirebase = ref();
const meaningFirebase = ref(false);
const getItemFirebase = async () => {
  meaningFirebase.value = true;
  try {
    const response = await axiosApiInstance.get(
      `https://jwt-firebase-vue3-fd2b5-default-rtdb.europe-west1.firebasedatabase.app/TestTwo.json`
    );
    itemFirebase.value = response.data;
  } catch (err) {
    console.log(err.response);
  } finally {
    meaningFirebase.value = false;
  }
};

onMounted(async () => {
  await getItemFirebase();
});

// end firebase

const imgItem = ref([]);
const comitUser = ref([]);

const props = defineProps(["openDrower", "closeDrower"]);

const isDrowerOpen = ref(false);

const closeDrawer = () => {
  isDrowerOpen.value = false;
};
const openDrawer = () => {
  isDrowerOpen.value = true;
};

const imgAddItemm = async () => {
    try {
        const { data } = await axios.get(`https://4dfce83c3fcfa997.mokky.dev/myDog`);
        imgItem.value = data; // Предполагается, что imgItem - это ref, если вы используете Vue 3
    } catch (error) {
        console.error("Ошибка при загрузке изображения:", error);
    }
};

imgAddItemm();

const creatOrder = async (item) => {
  try {
    const { data } = await axios.post(
      `https://4dfce83c3fcfa997.mokky.dev/Drower`,
      item
    );
  } catch (error) {
    console.log(error);
  }
};

const getUser = async () => {
  const res = await fetch("https://4dfce83c3fcfa997.mokky.dev/users");
  const data = await res.json();
  comitUser.value = data;
};

getUser();
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
