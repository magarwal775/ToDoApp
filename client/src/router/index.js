import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import ToDo from '@/components/ToDo'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import store from '@/store/store.js'
import Datepicker from 'vuejs-datepicker'
Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/todos',
      component: ToDo
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    }
  ]
})
