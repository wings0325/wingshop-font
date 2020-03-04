import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartData:{
      list:[
        {
          id: 1,
          image: '//img.alicdn.com/tps/i1/O1CN01dfLxOS1Zm8Fu51vNE_!!0-juitemmedia.jpg_790x420Q50s50.jpg_.webp',
          name: '草莓',
          num: 1,
          tag: '三斤装',
          price: 2
        },
        {
          id: 2,
          image: '//img.alicdn.com/tps/i1/O1CN01dfLxOS1Zm8Fu51vNE_!!0-juitemmedia.jpg_790x420Q50s50.jpg_.webp',
          name: '苹果',
          num: 1,
          tag: '四斤装',
          price: 3
        },
        {
          id: 3,
          image: '//img.alicdn.com/tps/i1/O1CN01dfLxOS1Zm8Fu51vNE_!!0-juitemmedia.jpg_790x420Q50s50.jpg_.webp',
          name: '橘子',
          num: 1,
          tag: '五斤装',
          price: 4
        }
      ]

    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
