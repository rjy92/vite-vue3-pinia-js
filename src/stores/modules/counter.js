// 1, 导入
import { defineStore } from 'pinia'
// 2. 创建一个store
/**
 * 第一个参数 : 唯一的名称
 * 第二个参数 : 传入配置
 * 返回值 : 返回一个函数，调用这个函数，即可拿到当前store
 */
const userCounterStore = defineStore('counterStore', {
  state: () => ({
    count: 66
  })
})

export default userCounterStore
