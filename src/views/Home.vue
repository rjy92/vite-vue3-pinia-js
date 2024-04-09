<template>
  <div>测试接口</div>
</template>

<script setup>
import { checkEnv } from '@/api/user/index'
console.log('come in checkEnv')
checkEnv().then(res => {
  console.log('checkEnvcheckEnvcheckEnv', res)
})
</script>
