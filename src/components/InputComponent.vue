<template>
    <div>
      <input 
        type="text" 
        v-model="inputValue" 
        @input="updateValue($event.target.value)" 
        class="border border-gray-900"
      />
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>
  /* Ваши стили для компонента */
  </style>