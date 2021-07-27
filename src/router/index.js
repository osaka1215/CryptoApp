import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/detail/:coin',
    name: 'Detail',
    component: Detail,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
