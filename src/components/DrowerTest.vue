<template>
  <div v-if="openDrower">
    <div
      class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"
    ></div>
    <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-8">
        <el-icon @click="closeDrower"><CloseBold /></el-icon>
      <div
        v-for="item in newImg" :key="item"
        class=" flex flex-col items-center relative bg-white border border-slate-500 rounded-3xl  my-5 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
        <img :src="item.url" alt="" class="w-1/2">
        <p class="mx-5">{{ item.title }}</p>
        <p>{{ item.price }}</p>
        
    </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
defineProps(["openDrower", "closeDrower"]);

const newImg = ref([]);

const imgItemAdd = async () => {
    try {
        const res = await axios.get(`https://4dfce83c3fcfa997.mokky.dev/Drower`);
        const allImages = res.data.map(item => item.imgItemAdd).flat();
        newImg.value = allImages;
  } catch (error) {
    console.error('Ошибка при загрузке изображений:', error);
  }
}
imgItemAdd();

</script>
