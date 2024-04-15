import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/aufgabe-1',
      name: 'Aufgabe 1',
      component: () => import('../views/Aufgabe1.vue')
    },
    {
      path: '/aufgabe-2',
      name: 'Aufgabe 2',
      component: () => import('../views/Aufgabe2.vue')
    },
    {
      path: '/aufgabe-3',
      name: 'Aufgabe 3',
      component: () => import('../views/Aufgabe3.vue')
    },
    {
      path: '/routing',
      name: 'Routing',
      component: () => import('../views/Routing.vue')
    },
    {
      path: '/Components',
      name: 'Components',
      component: () => import('../views/Components.vue')
    },
    {
      path: '/vShow',
      name: 'vShow',
      component: () => import('../views/VShow.vue')
    },
    {
      path: '/vIf',
      name: 'vIf',
      component: () => import('../views/VIf.vue')
    },
    {
      path: '/v-for',
      name: 'v-for',
      component: () => import('../views/VFor.vue')
    },
    {
      path: '/event-handling',
      name: 'Event Handling',
      component: () => import('../views/EventHandling.vue')
    },
    {
      path: '/emits',
      name: 'Emits',
      component: () => import('../views/Emits.vue')
    }
  ]
})

export default router
