<script lang="ts" setup>

import Footer from "@/components/Footer.vue"

import {Client as AuctionWebsocketClient, type LotCreateEvent} from "@/api/websocket/auction"

const client = new AuctionWebsocketClient(import.meta.env.VITE_WS_API_BASE_URL)
client.addEventListener("lot.create", function (ev: LotCreateEvent) {
  const lot = ev.detail
  console.log("Создан лот с id: " + lot.id)
})

</script>

<template>
  <RouterView/>
  <Footer/>
</template>