<template>
  <div>практика кастомного элемента</div>
  <div>props: {{ text }} {{ text2 }}</div>
</template>

<script setup>
const props = defineProps({
  text: String,
  text2: String,
});
</script>

<style></style>
