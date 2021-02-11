import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import IndexGuest from '../views/IndexGuest.vue'
import FamilyPage from '../views/FamilyPage.vue'
import ProductPage from '../views/ProductPage.vue'
import ItemPage from '../views/ItemPage.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexGuest',
    component: IndexGuest
  },
  {
    path: '/home',
    name: 'Index',
    component: Index
  },
  {
    path: '/family/:id',
    name: 'Family',
    component: FamilyPage
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ProductPage
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: ItemPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'IndexGuest') {
    if (store.state.authorized) {
      next ({ name: 'Index' })
      return
    }
    if (window.localStorage.getItem('controlTechAuthorized') === 'true') {
      store.commit('setAuthorized', true)
      next ({ name: 'Index' })
      return
    }
    next ()
  }
  if (window.localStorage.getItem('controlTechAuthorized') !== 'true') {
    store.commit('setAuthorized', false)
    next({ name: 'IndexGuest' })
  }
  next()
})

export default router
