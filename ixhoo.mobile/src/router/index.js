import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/index'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'index',
    component: MainPage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }]
})
