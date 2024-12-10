import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SplashScreen from '@/views/SplashScreen.vue'
import BookingHotel from '@/views/BookingHotel.vue'
import HotelView from '@/views/Hotel/HotelView.vue'
import DetailHotel from '@/views/Hotel/DetailHotel.vue'
import RoomsDetails from '@/views/Rooms/RoomsDetails.vue'
import RoomsView from '@/views/Rooms/RoomsView.vue'
import OnBoarding from '@/views/OnBoarding/OnBoarding.vue'
import OnBoardingTwo from '@/views/OnBoarding/OnBoardingTwo.vue'

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
      path: '/bookings',
      name: 'bookings',
      component: BookingHotel,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailHotel,
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomsView,
    },

    {
      path: '/detailsrooms/:id',
      name: 'detailrooms',
      component: RoomsDetails,
    },
    {
      path: '/onboardingone',
      name: 'onb',
      component: OnBoarding,
    },
    {
      path: '/onboard2',
      name: 'onb2',
      component: OnBoardingTwo,
    },



  ],
})

export default router
