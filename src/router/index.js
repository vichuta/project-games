import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailGame from '../views/DetailGame.vue'
import NotFoundPage from '../views/error/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchNotMatchPath(.*)',
      name: 'NotFound',
      component: NotFoundPage
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:gameId',
      name: 'detail',
      component: DetailGame
    }
  ]
})

export default router
