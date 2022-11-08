import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

import Homepage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import NotFoundPage from '@/pages/NotFoundPage'
import ItemAliasPage from '@/pages/ItemAliasPage'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'aliasAlias',
      component: ItemAliasPage
    },
    {
      path: '/:CatchAll(.*)',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})

export default routers
