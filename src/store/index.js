import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      name: '张三',
      grade: '高一（3）班',
      school: '解放中学（03541）',
      schoolNum: '203003652',
      cardNum: '8038114444',
    }
  },
  mutations: {
    saveMes(state, payload) {
      let userInfo = payload;
      state = { ...state, userInfo }
    }
  },
  actions: {
  },
  modules: {
  }
})
