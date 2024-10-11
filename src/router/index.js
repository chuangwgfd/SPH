import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Progress from '@/views/Progress.vue'
import HomeView from '../views/HomeView.vue'
import PatientInfo from '@/views/PatientInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: Progress
  },
  {
    path: '/patient',
    name: 'patient',
    component: PatientInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
