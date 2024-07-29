<template>
    <div class="flex flex-col items-center justify-center">   
        <img class="w-1/2 mb-5" src="https://sun1-23.userapi.com/s/v1/ig2/4KGPe8OxJs71BJHwyIK7UeDLxdWR-HkfgN_arKEJPSLWOJkYkzCH38EtossMEbkgly4esQZsDxsOz2XOHKqsiXj5.jpg?size=2154x2154&quality=96&crop=0,0,2154,2154&ava=1" alt="">
        <button @click="getUser" class="bg-red-500 w-1/2">Getter</button>
        <div id="userData">
            <ul>
                <li v-if="user.name">{{ user.name }}</li>
                <li v-if="user.username">{{ user.username }}</li>
                <li v-if="user.email">{{ user.email }}</li>
                <li v-if="user.address">{{ user.address.street }}</li>
                <li v-if=" user.address">{{ user.address.city }}</li>
                <li v-if="user.phone">{{ user.phone }}</li>
            </ul>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const user = ref({})

const getRandomNuber = () => {
    return Math.floor(Math.random() * 10) + 1
}

const getUser = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${getRandomNuber()}`)
    const data = await res.json()
    user.value = data
    console.log(data)
}    


</script>
