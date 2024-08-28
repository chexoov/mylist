<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14 p-5">
    <div>
      <div class="mb-5 bg-slate-200 rounded-xl shadow-xl p-3">
        <span ref="reactivText" v-for="(letter, index) in text" :key="index">
          {{ letter }}
        </span>
      </div>
      <div class="mb-10 bg-slate-100 rounded-xl shadow-xl p-3">
        <textarea
          v-model="textArea"
          type="text"
          :placeholder="text"
          @input="checkTextArea"
          class="w-full bg-slate-100 resize-none"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import axios from "axios";

const Key = "3T90ijZl6297EmMneISZAw==oE1lNBD0fqUDPIW1";

const text = ref("");
const reactivText = ref([]);
const textArea = ref("");

const ckeckTextArea = computed(() => textArea.value.split(""));

const gettText = async () => {
  const { data } = await axios.get(
    "https://api.api-ninjas.com/v1/quotes?category=happiness",
    {
      headers: {
        "X-Api-Key": Key,
      },
    }
  );
  text.value = data[0].quote;
};

const checkTextArea = () => {
  ckeckTextArea.value.forEach((letter, index) => {
    if (letter === text.value[index]) {
      reactivText.value[index].className = "text-green-500 underline";
    } else {
      reactivText.value[index].className = "text-red-500 underline";
    }
  })
};

gettText();
</script>
