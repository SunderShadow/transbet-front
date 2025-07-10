<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

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
const slideId = ref(0)
const router = useRouter()

const templateCarPicture = ref('/public/TemplateCarPic.png')
const carTitle = ref('Пример')
const currentBid = ref(50000)
const userBid = ref(50000);

function redirectToDetails() {
  router.push({name: 'auctionSingle'})
}

const makeBid = () => {

}

</script>

<template>
  <div class="auction-card" @click="redirectToDetails">
      <div @click.stop>
        <v-carousel
            v-model="slideId"
            hide-delimiter-background
            height="200"
            show-arrows
        >
          <v-carousel-item
              :aspect-ratio="388/418"
              v-for="(img, i) in car.images"
              :key="i"
              :src="img"
              cover
          />
        </v-carousel>
    </div>
    <div class="custom-indicators">
      <div
          v-for="(img, index) in car.images"
          :key="index"
          class="line"
          :class="{ active: slideId === index }"
      />
    </div>
    <div class="card-info">
      <h3 class="car-title">{{ carTitle }}</h3>
      <p class="text">Текущая ставка: {{ currentBid }}</p>
      <div>
        <p class="text">Ваша ставка: {{ userBid }}</p>
      </div>
    </div>

    <button class="bid-button" @click.stop.prevent="makeBid" >
      СДЕЛАТЬ СТАВКУ
      <span class="icon">
        <svg 
  viewBox="0 0 42 42" 
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  role="img"
  width="16"
  height="16"
  aria-label="Иконка"
>
  <g fill="currentColor" fill-rule="evenodd" transform="translate(4, 3)">
    <path d="M7.9999992 0L21.7180574 0C22.1638168 0 22.3254599 0.04641281 22.4884229 0.13356635 22.6513858 0.2207199 22.7792801 0.34861419 22.8664336 0.51157715 22.9535872 0.67454011 23 0.83618323 23 1.2819426L23 12.7180574C23 13.1638168 22.9535872 13.3254599 22.8664336 13.4884229 22.7792801 13.6513858 22.6513858 13.7792801 22.4884229 13.8664336 22.3254599 13.9535872 22.1638168 14 21.7180574 14L8.3214083 14C7.8764951 14 7.7151416 13.9538116 7.5523813 13.8670053 7.389621 13.780199 7.2617734 13.6527748 7.1744277 13.4903035 7.0870819 13.3278321 7.0403584 13.1666327 7.0388823 12.721722L7.0000047 1.00331764C6.9981724 0.45103592 7.4443999 0.00183778 7.9966816 0.0000055 7.9977874 0.00000183 7.9988933 0 7.9999992"/>
    <path d="M25.9999983 0L29.9999984 0 29.9999984 14 26.2942741 14C25.8487793 14 25.6872266 13.9536574 25.5243269 13.8666124 25.3614272 13.7795674 25.2335474 13.6518201 25.1463336 13.4890108 25.0591198 13.3262014 25.0126097 13.1646969 25.0121478 12.7192023L24.9999988 1.00103677C24.9994262 0.44875231 25.4466771 0.00057313 25.9989615 0.00000054 25.9993071 0.00000018 25.9996527 0 25.9999983 0z"/>
    <path d="M1.0000016 0L5.0000017 0 5.0000017 14 1.2942775 14C0.84878258 14 0.68722995 13.9536574 0.52433025 13.8666124 0.36143056 13.7795674 0.23355074 13.6518201 0.14633693 13.4890108 0.05912313 13.3262014 0.01261303 13.1646969 0.01215116 12.7192023L0.00000216 1.00103677C-0.00057043 0.44875231 0.4466804 0.00057313 0.99896485 0.00000054 0.99931044 0.00000018 0.99965603 0 1.0000016 0z"/>
    <path d="M13.5 16L16.5 16C17.0522847 16 17.5 16.4477153 17.5 17L17.5 33.5C17.5 34.8807119 16.3807119 36 15 36 15 36 13.6192881 36 12.5 34.8807119L12.5 17C12.5 16.4477153 12.9477153 16 13.5 16z"/>
  </g>
</svg>
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