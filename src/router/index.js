import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/page/Home.vue';
import Detail from '@/page/Detail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'Home',
    component: Home,
  },
  {
    path: "/detail",
    name: 'Detail',
    component: Detail,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router