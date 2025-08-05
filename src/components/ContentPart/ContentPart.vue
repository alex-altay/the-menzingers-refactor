<template>
  <div class="content-wrapper">
    <MainTitle />
    <RouterView class="content" />
  </div>
</template>

<script setup lang="ts">
import MainTitle from '@/components/ContentPart/MainTitle.vue'
</script>

<style scoped>
.content-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  box-sizing: border-box;
  /* TODO Fix this left border hack   */
  background-color: var(--white);
  padding-top: 60px;
  padding-bottom: 20px;
  width: 785px;
  min-height: 100%;

  @media (max-width: 1440px) and (max-height: 900px) {
    width: 700px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    padding: 50px 0 0;
    width: initial;
  }

  @media (min-width: 1920px) and (min-height: 1080px) {
    height: 995px;
  }

  @media (max-width: 600px) {
    margin-bottom: 0;
    padding-top: 30px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  width: 575px;

  @media (max-width: 1024px) {
    padding: 0 20px;
    width: auto;
    max-width: 575px;
  }
}
</style>
