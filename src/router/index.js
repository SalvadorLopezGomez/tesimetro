import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue';
import Opciones from '../views/Opciones.vue';
import Tiempo from '../views/Tiempo.vue';
import Resultado from '../views/Resultado.vue';
import Horario from '../views/Horario.vue';
import Nota from '../views/Nota.vue';
import Condiciones from '../views/Condiciones.vue';
import Firma from '../views/Firma.vue';
import Publicidad from '../views/Publicidad.vue';
import Herramientas from '../views/Herramientas.vue'

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
  },
  {
    path: '/resultado',
    name: 'Resultado',
    component: Resultado
  },
  {
    path: '/horario',
    name: 'Horario',
    component: Horario
  },
  {
    path: '/nota',
    name: 'Nota',
    component: Nota
  },
  {
    path: '/condiciones',
    name: 'Condiciones',
    component: Condiciones
  },
  {
    path: '/firma',
    name: 'Firma',
    component: Firma
  },
  {
    path: '/publicidad',
    name: 'Publicidad',
    component: Publicidad
  },
  {
    path: '/herramientas',
    name: 'Herramientas',
    component: Herramientas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
