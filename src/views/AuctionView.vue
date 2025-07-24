<script setup lang="ts">
import AuctionCard from "@/components/AuctionCard.vue"

import {useAuctionStore} from "@/stores/auction"

const auctionStore = useAuctionStore()
</script>

<template>
  <AuctionCard
    v-for="lot in auctionStore.lots" :key="lot.id"
    v-bind="lot"
  />
</template>
