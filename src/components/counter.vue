<template>
  <div class="app">App 页面</div>
  <h2>1. counterStore : {{ counterStore.count }}</h2>
  <h2>2. toRefs : {{ aCount }}</h2>
  <h2>3. storeToRefs : {{ bCount }}</h2>

  <button @click="changCount">改变count</button>
  <button @click="resetState">重置count</button>
</template>

<script setup>
import { toRefs } from 'vue'
import { storeToRefs } from 'pinia'
// 1. 导入该函数
import userCounterStore from '@/stores/modules/counter'

// 2. 调用，获得store
const counterStore = userCounterStore()

// 3. 拿到state值
/**
 * 注意 : 直接解构可以拿到值，但并不是响应式的了
 * 1. 使用 toRefs
 * 2. 使用pinia提供的 storeToRefs
 */
// toRefs
const { count: aCount } = toRefs(counterStore)
// storeToRefs
const { count: bCount } = storeToRefs(counterStore)

// 监听点击
const changCount = () => {
  // 可以直接操作！！！
  counterStore.count++
}

// 重置
const resetState = () => {
  // 回到初始值
  counterStore.$reset()
}
</script>
