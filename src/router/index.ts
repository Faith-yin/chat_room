/*
 * @Date: 2020-09-22 18:41:21
 * @information: 路由
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login', // 登录页面
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register', // 注册页面
    name: 'register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/home', // 主页面
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '*', // NotFound
    name: 'notFound',
    component: () => import('@/views/NotFound.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
