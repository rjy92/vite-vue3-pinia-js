import { defineStore } from 'pinia'

export const useMicroStore = defineStore('micro', {
  state: () => ({
    microparameter: null
  }),
  actions: {
    setParameter(data) {
      this.microparameter = data
    }
  }
})
