<template>
  <Header @add-portfolio="addPortfolio" />
  <div class="flex">
    <!-- <Portfolio v-if="openPortfolio" /> -->
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import Portfolio from "./components/Portfolio.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const openPortfolio = ref(false);

const closePortfolio = () => {
  openPortfolio.value = false;
};
const addPortfolio = () => {
  openPortfolio.value = true;
  console.log(openPortfolio.value);
};

// тут будут изменения
// проверка 2
</script>

<style>
body {
  background-color: #14e3ea !important;
}
</style>
