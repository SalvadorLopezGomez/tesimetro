import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue';
import Opciones from '../views/Opciones.vue';
import Tiempo from '../views/Tiempo.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/opciones',
    name: 'Opciones',
    component: Opciones
  },
  {
    path: '/tiempo',
    name: 'Tiempo',
    component: Tiempo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
