<template>
  <user />
  <h1>counter数据展示的情况</h1>
  <counter />
</template>

<script setup>
import user from './components/user.vue'
import counter from '@/components/counter.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
