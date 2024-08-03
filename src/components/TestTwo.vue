<template>
  <div class="flex items-center mx-auto w-1/2 ">
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

  <div class="flex flex-col items-center  lg:items-end my-5 mx-5">
    <button
      @click="openDrawer"
      class="border border-black rounded-full font-bold px-8 py-2"
    >
      корзина
    </button>
  </div>

  <DrowerTest v-if="isDrowerOpen" @closeDrower="closeDrawer" />

  <div class="flex flex-col items-center  xl:flex-row lg:flex-row">
    <el-card
      style="max-width: 480px"
      v-for="item in imgItem"
      :key="item"
      class="mr-4 text-center"
    >
      <template #header>
        <h2 class="text-sm/3 truncate">
          {{ item.title }}
        </h2>
      </template>
      <img :src="item.url" class="w-full" />
      <template #footer>
        <div class="flex flex-col syz-4 m-auto">
          {{ item.price }}
          <button
            @click="creatOrder(item)"
            class="border border-black rounded-full font-bold px-8 py-2 mt-2"
          >
            Купить
          </button>
        </div>
      </template>
    </el-card>
  </div>

  <div
    class="flex items-center overflow-auto h-96 relative max-w-lg my-5 mx-auto lg:mx-5  bg-white dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex-col divide-y dark:divide-slate-200/5"
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

  <div>
    <el-space wrap>
      <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "List item " + o }}
        </div>
      </el-card>
    </el-space>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DrowerTest from "./DrowerTest.vue";
import axios from "axios";

const imgItem = ref([]);
const itemAdd = ref([]);
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
  const { data } = await axios.get(`https://4dfce83c3fcfa997.mokky.dev/myDog`);
  imgItem.value = data.slice(0, 6);
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
