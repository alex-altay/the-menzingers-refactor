<template>
  <ShirtDrawings class="layout-half" />
  <ContentPart class="layout-half" />
  <CustomCursor />
</template>

<script setup lang="ts">
import ContentPart from '@/components/ContentPart/ContentPart.vue'
import ShirtDrawings from '@/components/ShirtDrawings.vue'
import CustomCursor from '@/components/CustomCursor.vue'
</script>

<style>
html {
  background-color: var(--color-white);
  font-family: 'Open Sans', sans-serif;
}

body {
  @media (orientation: landscape) and (height > 600px) {
    min-width: 1440px;
  }

  @media (width <= 1024px) {
    min-width: initial;
  }
  @media (width > 1024px) and (orientation: landscape) and (height > 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100vh;
    overflow-y: hidden;
  }
  @media (width >= 1440px) {
    overflow-x: hidden;
  }
}

#app {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: var(--main-padding);
  padding: var(--main-padding);
  height: 100%;

  @media (orientation: portrait), (height < 600px) {
    flex-direction: column-reverse;
    max-width: calc(100vw - 2 * var(--main-padding));
    height: auto;
    overflow-x: hidden;
  }
  @media (orientation: landscape) and (height > 600px) {
    max-height: 100vh;
  }
  @media (orientation: landscape) and (height > 600px) and (width > 1024px) {
    flex-grow: 0;
    max-width: 1920px;
    height: auto;
    max-height: 100vh;
  }
  @media (width > 1440px) {
    gap: calc(4 * var(--main-padding));
  }
}

.layout-half {
  position: relative;

  @media (orientation: 'portrait'), (height < 600px) {
    height: auto;
  }
  @media (orientation: landscape) and (width < 1920px) {
    flex: 1;
  }
  @media (width >= 1024px) and (height <= 1024px) {
    height: calc(100vh - 2 * var(--main-padding));
  }
  @media (width >= 1024px) and (height >= 1024px) and (orientation: landscape) {
    height: calc(1024px - 2 * var(--main-padding));
  }
  @media (width > 1440px) and (height >= 1080px) {
    max-height: 1080px;
  }
}
</style>
