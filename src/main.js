import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/bootstrap.min.css';
import './assets/css/style.css';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
