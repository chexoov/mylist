<template>
  <div class="flex flex-col items-center justify-center mb-10">
    <img
      class="w-1/3 mb-5 "
      src="https://sun1-23.userapi.com/s/v1/ig2/4KGPe8OxJs71BJHwyIK7UeDLxdWR-HkfgN_arKEJPSLWOJkYkzCH38EtossMEbkgly4esQZsDxsOz2XOHKqsiXj5.jpg?size=2154x2154&quality=96&crop=0,0,2154,2154&ava=1"
      alt=""
    />
    <button @click="getUser" class="bg-red-500 w-1/2">Getter</button>
    <div id="userData">
      <ul>
        <li v-if="user.name">{{ user.name }}</li>
        <li v-if="user.username">{{ user.username }}</li>
        <li v-if="user.email">{{ user.email }}</li>
        <li v-if="user.address">{{ user.address.street }}</li>
        <li v-if="user.address">{{ user.address.city }}</li>
        <li v-if="user.phone">{{ user.phone }}</li>
      </ul>
    </div>
  </div>
  <div class="slider-demo-block w-1/2 m-auto">
    <span class="demonstration">Default value</span>
    <el-slider v-model="imagesWidth" />
    <div>{{ imagesWidth }}</div>
  </div>

  <Carousel
    @bruh="testEmitAlert($event)"
    :images="images"
    :images-width="imagesWidth"
  />
  <div></div>
  <NewItem @increaseByOne="peremennaya = $event + peremennaya" />
  <div>{{ peremennaya }}</div>
</template>

<script setup>
import { ref } from "vue";
import Carousel from "./Carousel.vue";
import NewItem from "./NewItem.vue";

const user = ref({});
const images = ref([]);

const peremennaya = ref(0);

const imagesWidth = ref(0);

const testEmitAlert = (emittedValue) => {
  alert(emittedValue);
};

const getRandomNuber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const getUser = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${getRandomNuber()}`
  );
  const data = await res.json();
  user.value = data;
  console.log(data);
};

const getImages = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/`);
  const data = await res.json();
  const fiveImages = data.slice(0, 5);
  images.value = fiveImages;
};

getImages();
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
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
