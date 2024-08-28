<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14 p-5">
    <div class="flex-col p-5">
      <div class="mb-5 bg-slate-200 rounded-xl shadow-xl p-3">
        <div class="">
          <span
            ref="fetchedTexArray"
            v-for="(letter, index) in input"
            :key="index"
            >{{ letter }}</span
          >
        </div>
      </div>
      <div class="mb-10 bg-slate-100 rounded-xl shadow-xl p-3">
        <textarea
          v-model="textArea"
          type="text"
          :placeholder="input"
          :length="fetchedTextLength"
          class="w-full bg-slate-100 resize-none outline-none"
          @input="checkLetters"
        ></textarea>
      </div>
    </div>
    <div
      class="flex flex-col items-end mx-5 p-3 bg-slate-100 rounded-xl shadow-xl mb-10"
    >
      <div>Скорость печати: {{ speed }} знаков в минуту</div>
      <p>Оставшееся время: {{ time }}с</p>
      <el-button @click="reloadPage" class="my-2">Restart</el-button>
    </div>

    <el-dialog v-model="isDrowerOpen" align-center width="70%" class="text-2xl">
      <template #header> Результаты </template>

      <p class="text-lg">Времени потрачено: {{ timeElapsed }}</p>
      <p class="text-lg">Совершено ошибок: {{ errorsCount }}</p>
      <p class="text-lg">Скорость печати: {{ speed }} знаков/сек</p>
      <template #footer>
        <el-button @click="reloadPage" type="primary"
          >Попробовать снова</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import axios from "axios";

const input = ref();
const isDrowerOpen = ref(false);
const textArea = ref("");
const errorsCount = ref(0);
const fetchedTexArray = ref([]);
const fetchedText = ref("");

const speed = ref(0);
const time = ref(59);
let timer = null;

const timeElapsed = computed(() => 60 - time.value);
const inputArray = computed(() => textArea.value.split(""));
const charsTypedLength = computed(() => textArea.value.length);
const fetchedTextLength = computed(() => fetchedText.value.length);

const handleTimer = () => {
  if (!timer) {
    timer = setInterval(() => {
      if (time.value === 1) clearInterval(timer);
      time.value--;
    }, 1000);
  }
};

const measureTypeSpeed = () => {
  const timeGiven = 60;
  const timeElapsed = timeGiven - time.value;
  const charsPerMinute = Math.round(
    (charsTypedLength.value / timeElapsed) * 60
  );

  speed.value = charsPerMinute;
};

const checkLetters = () => {
  measureTypeSpeed();
  handleTimer();
  errorsCount.value = 0;
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
    if (letter.className === "text-red-500 underline") {
      errorsCount.value++;
    }
  });
};

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
  fetchedText.value = data[0].quote;
};

getQuote();

watch(time, () => {
  if (time.value === 0) {
    isDrowerOpen.value = true;
  }
});

watch(textArea, (newValue) => {
  if (newValue.length === fetchedTextLength.value) {
    clearInterval(timer);

    isDrowerOpen.value = true;
  }
});

const reloadPage = () => {
  window.location.reload();
};
</script>
