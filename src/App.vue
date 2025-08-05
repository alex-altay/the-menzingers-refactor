<template>
  <ShirtDrawings />
  <ContentPart />
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
  min-width: 1440px;
}
@media (width > 1024px) {
  body {
    overflow-y: hidden; /* Hiding scrollbars on everything bigger than Macbook */
  }
}
@media (min-width: 1440px) {
  body {
    overflow-x: hidden;
  }
}

#app {
  display: flex;
  justify-content: flex-end;
  min-height: 100vh;
}
@media (width: 1366px) and (height: 1024px) {
  #app {
    /* iPad Pro settings */
    height: 100vw;
  }
}

@media (max-width: 1024px) {
  body {
    min-width: initial;
  }
  #app {
    flex-direction: column-reverse;
    height: auto;
  }
}

@media (min-width: 1920px) and (min-height: 1080px) {
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  #app {
    max-width: 1920px;
    min-height: auto;
    max-height: 1080px;
  }
}
@media (max-width: 1440px) and (max-height: 900px) {
  body {
    overflow-y: scroll;
  }
}
</style>
