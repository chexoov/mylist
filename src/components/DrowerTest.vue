<template>
  <div>
    <div
      class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70">
    </div>
    <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-5">
      <div class="flex justify-between">
        <el-icon @click="$emit('closeDrower')" class="mt-1"
          ><CloseBold
        /></el-icon>
        <div class="border border-black rounded-full px-2">
          Общая стоимость: {{ totalPrice }}.руб
        </div>
      </div>

      <el-scrollbar height="520px">
        <div
          v-for="item in newImg"
          :key="item"
          class="flex flex-row bg-slate-400 border border-slate-500 rounded-3xl mt-3 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
        >
          <img
            :src="item.url"
            alt=""
            class="w-20 h-20 m-1 rounded-full items-start"
          />
          <div class="flex flex-col">
            <p class="text-sm truncate mb-1">{{ item.title }}</p>
            <div class="">
              <p class="mx-1">{{ item.price }}</p>
              <el-button @click="delitItem(item)" type="danger" class="">
                Удалить
              </el-button>
            </div>
          </div>
        </div>
        <infoTest  
        v-if="!totalPrice"
            title="Корзина пустая"
            description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            image-url="https://static.tildacdn.com/tild6132-3866-4235-a330-633334393464/favpng_shopping-cart.png"
        />
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import infoTest from "./infoTest.vue";

defineProps(["isDrowerOpen"]);

const newImg = ref([]);

const totalPrice = computed(() =>
  newImg.value.reduce((acc, item) => acc + item.price, 0)
);

const imgItemAdd = async () => {
  try {
    const { data } = await axios.get(
      `https://4dfce83c3fcfa997.mokky.dev/Drower`
    );
    newImg.value = newImg.value.map((item) => {
      const drower = data.find((drower) => drower.id === item.id);
    });
  } catch (error) {
    console.error("Ошибка при загрузке изображений:", error);
  }
};
imgItemAdd();

const delitItem = async (item) => {
  try {
    const { data } = await axios.delete(
      `https://4dfce83c3fcfa997.mokky.dev/Drower/${item.id}`
    );
    console.log(data);
    newImg.value = newImg.value.filter((img) => img.id !== item.id);
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://4dfce83c3fcfa997.mokky.dev/Drower`
    );
    newImg.value = data;
    console.log(data);
  } catch (error) {}
});
</script>
