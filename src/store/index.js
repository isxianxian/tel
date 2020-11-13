import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLogin: false,
    schools: [],
    allStudents: [],

    hasCurStudent: false,

    getMsgs: false,
    msgs: [],

    getScore: false,
    scoreList: [],
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
      localStorage.setItem('schools', JSON.stringify(schools));
    },
    saveAllStudens(state, students) {
      state.allStudents = students;
    },
    saveCurStudent(state, student) {
      localStorage.setItem('curStudent', JSON.stringify(student));
      state.hasCurStudent = true;
      state.getMsgs = false;
      state.msgs = [];
      state.getScore = false;
      state.scoreList = [];
    },
    saveMsgs(state, msgs) {
      state.getMsgs = true;
      state.msgs = msgs;
    },
    saveScore(state, scoreList) {
      state.getScore = true;
      state.scoreList = scoreList;
    },
  },
  actions: {
  },
  modules: {
  }
})
