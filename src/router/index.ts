import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuctionView from "@/views/AuctionView.vue";
import AuctionSingleView from "@/views/AuctionSingleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auction',
      name: 'auction',
      component: AuctionView,
    },
    {
      path: '/auctionSingle',
      name: 'auctionSingle',
      component: AuctionSingleView,
    }
  ],
})

export default router
