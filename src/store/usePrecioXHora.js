import { defineStore } from 'pinia'

export const usePrecioXHora = defineStore('precio', {
  state: () => {
    return { price: 2}
  },
  getters: {
  },
  actions: {
    increment(val = 2) {
      this.price += val
    },
    setPrice(val = 2) {
      this.price = val
    }
  },
})
