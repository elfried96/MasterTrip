import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SplashScreen from '@/views/SplashScreen.vue'
import BookingHotel from '@/views/BookingHotel.vue'
import HotelView from '@/views/HotelView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'splash',
      component: SplashScreen,
    },
    {
      path: '/hotels',
      name: 'hotel',
      component: HotelView,
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingHotel,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
