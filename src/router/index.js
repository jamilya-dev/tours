import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: () => import('../views/HomeViews.vue') },
  { path: '/tours/:id', component: () => import('../views/ToursPageViews.vue') },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
