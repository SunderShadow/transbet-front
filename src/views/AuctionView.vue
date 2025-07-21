<script setup lang="ts">

import AuctionCard from "@/components/Auction-card.vue";
import {ref,onMounted} from "vue";
import axios from "axios";
import {defineStore} from "pinia";

// ТЕСТОВЫЙ ШАБЛОН
var auctions = ref([
  {
    title: 'Tayota RX5',
    currentBid: 50000,
    yourBid: 50000,
    images: [
    '/public/TemplateCarPic.png',
      '/public/TemplateCarPic.png',
     '/public/TemplateCarPic.png',
      '/public/TemplateCarPic.png',
      '/public/TemplateCarPic.png'
   ]
  },
  {
    title: 'BMW M5',
    currentBid: 80000,
    yourBid: 82000,
    images: [
     '/public/TemplateCarPic.png',
     '/public/TemplateCarPic.png',
     '/public/TemplateCarPic.png'
   ]
  },
  {
    title: 'BMW M5 Competition',
    currentBid: 85000,
    yourBid: 82000,
    images: [
      '/public/TemplateCarPic.png',
      '/public/TemplateCarPic.png',
      '/public/TemplateCarPic.png'
    ]
  },
  {
    title: 'Mercedes-Benz AMG GT',
    currentBid: 95000,
    yourBid: 93000,
    images: [
      '/public/TemplateCarPic.png',
      '/public/TemplateCarPic.png',
      '/public/TemplateCarPic.png'
    ]
  },
  {
    title: 'Porsche 911 Turbo S',
    currentBid: 150000,
    yourBid: 148000,
    images: [
      '/public/TemplateCarPic.png',
      '/public/TemplateCarPic.png',
      '/public/TemplateCarPic.png'
    ]
  },
  {
    title: 'Audi RS e-tron GT',
    currentBid: 120000,
    yourBid: 118000,
    images: [
      '/public/TemplateCarPic.png',
      '/public/TemplateCarPic.png',
      '/public/TemplateCarPic.png'
    ]
  }
])

interface AuctionLot {
  id: number
  title: string
  currentBid: number
  yourBid: number
  images: string[]
}




onMounted(() => {
  axios.get('http://localhost:8085/auction/lots')
      .then(function (response) {
        console.log('Получение всех лотов : ' + response)
        auctions = response.data
      })
      .catch(function (error) {
        console.log('Ошибка получения всех лотов : ' + error);
      })
})
</script>

<template>
  <AuctionCard
  v-for="(item,index) in auctions"
  :key="index"
  :car="item"
  />
</template>

<style scoped>

</style>