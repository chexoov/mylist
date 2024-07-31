<template>
<div class="m-auto">
    <el-carousel :interval="5000" arrow="always"
    :style="`width: ${imagesWidth}vw`"
    >
      <el-carousel-item v-for="item in images" :key="item">
        <img
          :src="item.url"
          alt="Изображение"
          style="width: 100vh; height: auto"
        />
      </el-carousel-item>
    </el-carousel>
</div>

  <button @click="$emit('bruh', 'Hello Parent!')">тест эмитов</button>

</template>

<script setup>

const props = defineProps(['images', 'imagesWidth']);


</script>