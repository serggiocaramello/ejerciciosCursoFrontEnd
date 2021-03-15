import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: []
  },
  mutations: {
    SET_STUDENT(state, student) {
      state.students.push({ ...student, id: state.length });
    }
  },
  actions: {},
  modules: {}
});
