import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const user = ref('Artur')

    const changeUsername = () => {
        user.value = 'Ainur'
    }

    return { user, changeUsername }
})
