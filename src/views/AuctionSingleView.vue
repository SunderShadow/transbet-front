<script setup lang="ts">

import AuctionCard from "@/components/Auction-card.vue";
import { ref , onMounted} from "vue";

import axios from "axios";
import {ca} from "vuetify/locale";


const disctioprion = ref('disctiprion')

const props = defineProps({
  id: String
})

const car = {
  title: 'Tayota Tiguan RX5',
  currentBid: 50000,
  yourBid: 50000,
  images: [
    '/public/TemplateCarPic.png',
    '/public/TemplateCarPic.png',
    '/public/TemplateCarPic.png'
  ]
}

onMounted(() => {
  
})

</script>

<template>
  <auction-card :car="car"></auction-card>
  <p>{{id}}</p>
  <p>{{disctioprion}}</p>
</template>

<style scoped>

</style>