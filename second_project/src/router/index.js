import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/home"
import users from "../components/users.vue"
import user from "../components/user.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'users',
    component:users,
  },
  {
    path:"/user/:id",
    name:"user",
    component:user
  }
]

const router = new VueRouter({
  routes
})

export default router
