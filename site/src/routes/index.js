import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/Home.vue'
import CartView from '../views/Cart.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/cart', component: CartView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router