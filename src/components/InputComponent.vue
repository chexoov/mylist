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
  export default {
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        inputValue: this.value
      }
    },
    methods: {
      updateValue(value) {
        this.inputValue = value
        this.$emit('update:value', value) // Излучаем событие изменения значения
      }
    },
    watch: {
      value(newValue) {
        this.inputValue = newValue // Обновляем локальное значение при изменении пропа
      }
    }
  }
  </script>
  
  <style scoped>
  /* Ваши стили для компонента */
  </style>