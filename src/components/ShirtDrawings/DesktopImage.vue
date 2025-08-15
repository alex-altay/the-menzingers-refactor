<template>
  <div class="wrapper">
    <img src="@/assets/big.jpg" class="image-big" usemap="#drawings-big" />
    <map id="drawings-big" name="drawings-big">
      <area
        v-aimed-cursor
        v-expandable-cursor
        data-name="title"
        :coords="title"
        shape="poly"
        @click="$router.push('/')"
      />
      <area
        v-aimed-cursor
        v-expandable-cursor
        v-for="drawing in drawings"
        :key="drawing.id"
        :data-name="drawing.name"
        :coords="drawing.coords"
        shape="poly"
        @click="() => $router.push(`/${drawing.name}`)"
      />
    </map>
  </div>
</template>

<script setup lang="ts">
import initMapResizer from '@/utils/imageMapResizer.ts'
import { drawingsCoords, titleCoords } from '@/data/drawings-big'
import { ref, onMounted } from 'vue'

const drawings = ref({ ...drawingsCoords })
const title = ref(titleCoords)

function updateCoords() {
  if (window.removeResizerListeners) {
    window.removeResizerListeners()
  }

  setTimeout(() => {
    initMapResizer()
    window.imageMapResize()
  }, 250)
}

onMounted(() => {
  window.addEventListener('resize', updateCoords)
  updateCoords()
})
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}

.image-big {
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (width >= 1920px) {
    clip-path: polygon(0 0, 96% 0, 88% 100%, 0 100%);
  }
}
</style>
