import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLogin: false,
    schools: [],
    allStudents: [],
    hasCurStudent: false,
    curStudent: {},
  },
  mutations: {
    loginState(state, val) {
      state.hasLogin = val;
    },
    saveToken(state, token) {
      state.token = token;
      state.hasLogin = true;
    },
    saveSchools(state, schools) {
      state.schools = schools;
    },
    saveAllStudens(state, students) {
      state.allStudents = students;
    },
    saveCurStudent(state, student) {
      state.curStudent = student;
      state.hasCurStudent = true;
    },
  },
  actions: {
  },
  modules: {
  }
})
