<template>
  <el-carousel
    :interval="5000"
    type="card"
    height="400px"
    indicator-position="outside"
    class="w-1/2 justify-center mx-auto mt-5"
  >
    <el-carousel-item class="h-full" v-for="item in imgItem" :key="item">
      <img class="w-full" :src="item.url" alt="Изображение" />
    </el-carousel-item>
  </el-carousel>

  <div class="flex justify-end my-5 mx-5">
    <button 
    @click="openDrawer"
    class="border border-black rounded-full font-bold px-8 py-2">
      корзина
    </button>
  </div>

  <DrowerTest :open-drower="openDrower" :close-drower="closeDrawer" />

  <div class="flex flex-row">
    <el-card
      style="max-width: 480px"
      v-for="item in imgItem"
      :key="item"
      class="mr-4 text-center"
    >
      <template #header>{{ item.title }}</template>
      <img :src="item.url" style="width: 100%" />
      <template #footer>
        <div class="flex flex-col syz-4 m-auto">
          {{ item.price }}
          <button
            @click="creatOrder(item)"
            class="border border-black rounded-full font-bold px-8 py-2 mt-2"
          >
            В корзину
          </button>
        </div>
      </template>
    </el-card>
  </div>
  <div class="w-1/2 my-1 mx-5" v-for="items in comitUser" :key="items">
    <div class=" flex px-2  rounded-2xl items-center relative bg-white border border-slate-500   my-5 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
      <img :src="items.Photo" alt="" class="w-[100px]">
      <div class="flex flex-col">
        <p class="mx-5 text-red-600"> {{ items.name }}</p>
        <p class="line-clamp-2 mx-5 text-blue-700">{{ items.Feedback }}</p>
      </div>
    </div>
    <!-- component -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import DrowerTest from "./DrowerTest.vue";
import axios from "axios";

const imgItem = ref([]);
const itemAdd = ref([]);
const comitUser = ref([]);

const props = defineProps(["openDrower", "closeDrower"]);

const openDrower = ref(false);

const closeDrawer = () => {
  openDrower.value = false
}
const openDrawer = () => {
  openDrower.value = true
}

const imgAddItemm = async () => {
  const res = await fetch(`https://4dfce83c3fcfa997.mokky.dev/myDog`,);
  const data = await res.json();
  const SixImages = data.slice(0, 6);
  imgItem.value = SixImages;
};

const creatOrder = async (item) => {
  itemAdd.value.push(item);
  try {
    const res = await axios.post(`https://4dfce83c3fcfa997.mokky.dev/Drower`, {
      imgItemAdd: itemAdd.value,
    }
  )}
  catch (error) {
    console.log(error);
  }  
}
imgAddItemm();

const getUser = async () => {
  const res = await fetch('https://4dfce83c3fcfa997.mokky.dev/users')
  const data = await res.json();
  comitUser.value = data
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
