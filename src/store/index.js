import Vue from 'vue';
import Vuex from 'vuex';
import tours from './tours';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tours,
  },
});
export default store;
