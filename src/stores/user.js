import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const user = ref('Artur')

    const changeUsername = () => {
        user.value = 'Ainur'
    }

    return { user, changeUsername }

  
})

export const useTest = defineStore('test', () => {
  const test = ref(1)

  const changeTest = (newValue) => {
    test.value = newValue
  }

  return { test, changeTest }
}
)
