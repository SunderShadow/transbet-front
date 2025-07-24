<script setup lang="ts">
import type {Lot} from "@/stores/auction"
import {ref} from "vue"

import router from "@/router"
import BidIcon from "@/components/icons/BidIcon.vue"

type Props = Lot & {
  user_bid?: null|number
}

const {
  current_bid,
  pictures,
  user_bid = null
} = defineProps<Props>()

const currentSlide = ref(0)

function redirectToDetails() {
  router.push({name: 'auctionSingle', params: {id: 2}})
}

function makeBid() {

}
</script>

<template>
  <div class="auction-card" @click="redirectToDetails">
    <div @click.stop>
      <v-carousel
          v-model="currentSlide"
          hide-delimiter-background
          height="200"
          show-arrows
      >
        <v-carousel-item
            v-for="(img, i) in pictures" :key="i" :src="img"
            cover
        />
      </v-carousel>
    </div>
    <div class="custom-indicators">
      <div
          class="line"

          v-for="i in pictures.length" :key="i"
          :class="{ active: currentSlide === i - 1 }"
      />
    </div>
    <div class="card-info">
      <h3 class="car-title">{{ name }}</h3>
      <p class="text">Текущая ставка: {{ current_bid }}</p>
      <div v-if="user_bid">
        <p class="text">Ваша ставка: {{ user_bid }}</p>
      </div>
    </div>

    <button class="bid-button" @click.stop.prevent="makeBid">
      СДЕЛАТЬ СТАВКУ
      <span class="icon">
        <BidIcon/>
      </span>
    </button>
  </div>
</template>

<style scoped>

.auction-card {
  background-color: #f9f9f9;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
}

.car-image {
  width: 100%;
  height: auto;
  display: block;
}

.card-info {
  padding: 12px;
}

.car-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.text {
  font-size: 14px;
  margin: 4px 0;
}

.bid-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #7cc300;
  border: 2px solid #7cc300;
  padding: 10px;
  width: calc(100% - 24px);
  margin: 12px auto;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: 0.2s;
}

.custom-indicators {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px 8px;
}

.line {
  flex: 1;
  height: 5px;
  margin: 0 4px;
  background-color: #ccc;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.line.active {
  background-color: black;
}

.bid-button:hover {
  background-color: #7cc300;
  color: white;
}

.icon {
  margin-left: 14px;
  font-size: 16px;
}
</style>