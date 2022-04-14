import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    dubble: (state, getters) => {
      console.log(getters);
      return state.count * 2;
    },
  },
});
