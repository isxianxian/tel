import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/Home.vue'
import Me from '../views/Me.vue'
import Msg from '../views/Msg.vue'
import Tel from '../views/Tel.vue'
import Fraction from '../views/Fraction'
import Bind from '../views/Bind.vue'
import Detail from '../views/Detail.vue'
import History from '../views/History'
import Record from '../views/Record'
import FamilyTel from '../views/FamilyTel'
import Pay from '../views/Pay'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/tel',
        component: Tel
      },
      {
        path: '/msg',
        component: Msg
      },
      {
        path: '/fraction',
        component: Fraction
      },
      {
        path: '/me',
        component: Me
      }
    ]
  },
  { path: '/bind', component: Bind },
  { path: '/pay', component: Pay },
  { path: '/detail', component: Detail },
  { path: '/history', component: History },
  { path: '/record', component: Record },
  { path: '/familyTel', component: FamilyTel },
]

const router = new VueRouter({
  routes
})

export default router
