<script setup lang="ts">

import {ref} from "vue";

// тестовая имплементация параметров
const userImg = ref("public/Smart_Tamplate.png");
const userName = ref("Умный человек в очках")
const balance = ref(30000)

function updateInfo() {
  alert("Not implemented")
}

function withdraw() {
  alert("Not implemented")
}
</script>
// Ебланда на ЧатГПТ дала хреновые стили , надо будет подвигать кнопочки
<template>
    <v-card class="pa-4" elevation="1">
      <v-row no-gutters align="center" justify="start">
        <v-avatar size="80" class="mr-4">
          <v-img :src="userImg"/>
        </v-avatar>
        <div class="text-subtitle-1 font-weight-medium">{{userName}}</div>
      </v-row>

      <v-btn class="mt-4 mb-2" variant="outlined" color="success" block @click="updateInfo">
        Обновить информацию
      </v-btn>


      <div class="text-body-1 mb-4">Лицевой счёт: {{balance}}</div>
      <v-row justify="space-between">
        <v-btn variant="outlined" color="success" class="w-48" @click="withdraw">
          ВЫВЕСТИ
        </v-btn>
        <v-btn variant="outlined" color="success" class="w-48" @click="withdraw">
          ВНЕСТИ
        </v-btn>
      </v-row>

    </v-card>
</template>

<style scoped>

</style>