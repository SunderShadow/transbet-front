<script setup lang="ts">
import { ref } from 'vue'
import BidIcon from "@/components/icons/BidIcon.vue"
import AccountIcon from "@/components/icons/AccountIcon.vue"

</script>

<template>
  <footer class="footer">
    <router-link
        :to="{name: 'auction'}"
        class="footer-item"
    >
      <BidIcon />
      <span>Аукцион</span>
    </router-link>

<!--    <router-link-->
<!--        :to="{name: 'home'}"-->
<!--        class="footer-item"-->
<!--    >-->
<!--      <svg viewBox="0 0 24 24">-->
<!--        <path d="M13 2L3 14h7v8l10-12h-7z"/>-->
<!--      </svg>-->
<!--      <span>Мои ставки</span>-->
<!--    </router-link>-->

    <router-link
        :to="{name: 'account'}"
        class="footer-item"
    >
      <AccountIcon />
      <span>Аккаунт</span>
    </router-link>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ccc;
  padding: 8px 0;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.2s ease;
  text-decoration: none;
}

.footer-item span {
  font-size: 14px;
}
.footer-item svg {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  fill: currentColor;
}

.router-link-active {
  color: #7CC300;
}
</style>