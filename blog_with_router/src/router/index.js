import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/home"
import Post from "../components/post.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'post',
    component:Post,
    
  }
]

const router = new VueRouter({
  routes
})

export default router
