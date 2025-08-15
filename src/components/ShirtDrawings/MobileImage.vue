<template>
  <div class="wrapper">
    <img src="@/assets/small.jpg" class="image-small" usemap="#drawings-small" ref="image" />
    <map id="drawings-small" name="drawings-small">
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
import { BREAKPOINT } from '@/data/constants'
import { drawingsCoords, titleCoords } from '@/data/drawings-small'
import { ref, onMounted, onUnmounted } from 'vue'

const image = ref<HTMLImageElement | null>(null)
const drawings = ref({ ...drawingsCoords })
const title = ref(titleCoords)

function updateCoords() {
  const width = image.value?.width || 0
  const height = image.value?.height || 0
  const xDiff = (BREAKPOINT - width) / 2
  const yDiff = (BREAKPOINT - Math.min(BREAKPOINT, Math.max(width, height))) / 2

  const updateCoord = (value: string, index: number): number => {
    const diff = index % 2 === 0 ? xDiff : yDiff
    return Math.max(+value - diff, 0)
  }

  const updateDrawing = (drawing: Drawing): Drawing => ({
    id: drawing.id,
    name: drawing.name,
    coords: drawing.coords.split(',').map(updateCoord).join(','),
  })

  title.value = titleCoords.split(',').map(updateCoord).join(',')
  drawings.value = drawingsCoords.map(updateDrawing)
}

onMounted(() => {
  window.addEventListener('resize', updateCoords)
  updateCoords()
})
onUnmounted(() => {
  window.removeEventListener('resize', updateCoords)
})
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}

.image-small {
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (width <= 768px) {
    object-fit: none;
  }

  @media (width <= 768px) and (orientation: portrait) {
    height: 100vh;
    max-height: 768px;
  }
  @media (width <= 768px) and (orientation: landscape) {
    height: 100%;
  }
}
</style>
