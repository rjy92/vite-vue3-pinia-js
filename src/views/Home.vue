<template>
  <div>home</div>
  <el-button type="primary" size="default" :icon="Plus">新增</el-button>
  <div class="container">
    <span class="title">我的标题</span>
  </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.container {
  .title {
    background: blue;
  }
}
</style>
