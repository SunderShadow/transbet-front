<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
  <footer class="footer">
    <router-link
        :to="{name: 'auction'}"
        class="footer-item"
    >
      <svg viewBox="0 0 24 24">
        <path d="M3 21h2v-2h14v2h2v-2a2 2 0 0 0-2-2h-2v-4h1l2-4-2-4h-1V3h-4v2h-2V3H7v2H6l-2 4 2 4h1v4H5a2 2 0 0 0-2 2v2z"/>
      </svg>
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
      <svg viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
      </svg>
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