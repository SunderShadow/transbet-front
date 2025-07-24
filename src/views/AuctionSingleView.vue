<script setup lang="ts">

import AuctionCard from "@/components/AuctionCard.vue"

import {useRoute} from "vue-router"
import {useAuctionStore} from "@/stores/auction.ts";

const route = useRoute()
const auctionStore = useAuctionStore()

const lot = auctionStore.findLotByID(Number(route.params.id))
</script>

<template>
  <template v-if="lot === undefined">
    404 Not found
  </template>

  <template v-else>
    <AuctionCard v-bind="lot"/>
    <p>{{lot.id}}</p>
    <p>{{lot.description}}</p>
  </template>
</template>

<style scoped>

</style>