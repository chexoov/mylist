<template>
  <!-- component -->
  <div class="flex flex-col py-4 px-12">
    <div class="bg-red-100 border border-spacing-8">
      <span
        ref="fetchedTexArray"
        v-for="(letter, index) in input"
        :key="index"
        >{{ letter }}</span
      >
    </div>
    <div>
      <textarea
        v-model="textArea"
        type="text"
        :placeholder="input"
        class="w-full"
        @input="checkLetters"
      ></textarea>
    </div>
  </div>
  <div>{{ errorsCount }}</div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import axios from "axios";

const input = ref();
const isFalse = ref(false);
const textArea = ref("");
const errorsCount = ref(0);
const fetchedTexArray = ref([]);

const inputArray = computed(() => textArea.value.split(""));

const checkLetters = () => {
  inputArray.value.forEach((letter, index) => {
    if (letter === input.value[index]) {
      fetchedTexArray.value[index].className = "text-green-500 underline";
    } else {
      fetchedTexArray.value[index].className = "text-red-500 underline";
    }
  });

  errorTest();
};

const errorTest = () => {
  fetchedTexArray.value.forEach((letter) => {
    if (letter.className === "text-red-500 underline" ) {
      errorsCount.value++;};
  });
};

// watch(textArea, (newValue) => {
//   isFalse.value = newValue === input.value;
// });

const apiKey = "3T90ijZl6297EmMneISZAw==oE1lNBD0fqUDPIW1";

const getQuote = async () => {
  const { data } = await axios.get(
    "https://api.api-ninjas.com/v1/quotes?category=happiness",
    {
      headers: {
        "X-Api-Key": apiKey,
      },
    }
  );
  input.value = data[0].quote;
};

getQuote();
</script>
