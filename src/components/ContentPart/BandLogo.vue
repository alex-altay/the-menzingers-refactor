<template>
  <div class="logo-wrapper">
    <div class="logo desktop-hidden" @click="smoothScrollToPicture"></div>
    <a v-aimed-cursor class="logo mobile-hidden" :href="AFTER_THE_PARTY_LINK" target="_blank"></a>
  </div>
</template>

<script setup lang="ts">
import { AFTER_THE_PARTY_LINK, SHIRT_DRAWINGS_ID } from '@/data/constants'

function smoothScrollToPicture() {
  document.getElementById(SHIRT_DRAWINGS_ID)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.logo-wrapper {
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  cursor: inherit;
  background-image: url(@/assets/sprite.svg);
  background-position: 84% 102%;
  background-size: 800px auto;
  width: 85px;
  height: 100px;

  &:hover {
    animation: clockLogo 0.5s ease-in-out infinite;
  }

  @media (max-width: 1440px) {
    background-size: 560px auto;
    width: 60px;
    height: 70px;
  }

  @media (max-width: 600px) {
    background-size: 350px auto;
    width: 40px;
    height: 45px;
  }
}

@keyframes clockLogo {
  0% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(2deg);
  }
}
</style>
