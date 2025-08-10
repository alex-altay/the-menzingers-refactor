<template>
  <div class="content-wrapper" :id="CONTENT_WRAPPER_ID">
    <MainTitle />
    <RouterView class="content" />
  </div>
</template>

<script setup lang="ts">
import MainTitle from '@/components/ContentPart/MainTitle.vue'
import { CONTENT_WRAPPER_ID } from '@/data/constants'
</script>

<style scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 60px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (width <= 600px) {
    padding-top: 30px;
  }
  @media (width <= 1024px) {
    padding-top: 50px;
  }
  @media (width > 1440px) and (height >= 1080px) {
    overflow-y: hidden;
  }
}

.content {
  display: flex;
  flex-direction: column;
  max-width: 600px;

  @media (width >= 1024px) {
    width: auto;
  }
}
</style>
