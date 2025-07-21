import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuctionView from "@/views/AuctionView.vue";
import AuctionSingleView from "@/views/AuctionSingleView.vue";
import AccountView from "@/views/AccountView.vue";

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
      path: '/auctionSingle/:id',
      name: 'auctionSingle',
      component: AuctionSingleView,
      props: true
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
    }
  ],
})

export default router
