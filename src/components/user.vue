<template>
  <div class="app">App 页面</div>
  <h2>1. userStore.name : {{ userStore.name }}</h2>
  <h2>2. userName: {{ userName }}</h2>

  <button @click="changeName">改变age</button>
</template>

<script setup>
import { computed } from 'vue'
// 1. 导入该函数
import { useUserStore } from '@/stores/modules/user'

// 2. 调用，获得store
const userStore = useUserStore()

const userName = computed(() => userStore.name)

const changeName = () => {
  userStore.setName('New Name')
}
</script>
