<template>
  <div :id="SHIRT_DRAWINGS_ID" class="shirt-drawings">
    <!-- TODO Fix this left border hack -->
    <div class="left-border-hack"></div>

    <picture>
      <source
        srcset="@/assets/small.jpg"
        :media="`(max-width: ${BREAKPOINT}px)`"
        usemap="#drawings-small"
      />
      <img src="@/assets/big.jpg" class="background" usemap="#drawings-big" />
    </picture>

    <map name="drawings-big">
      <area
        v-aimed-cursor
        v-expandable-cursor
        @click="$router.push('/')"
        shape="poly"
        :coords="title[coordsSize]"
      />

      <area
        v-aimed-cursor
        v-expandable-cursor
        v-for="drawing in drawings"
        :key="drawing.id"
        :data-name="drawing.name"
        @click="() => $router.push(`/${drawing.name}`)"
        shape="poly"
        :coords="drawing[coordsSize]"
      />
    </map>
  </div>
</template>

<script setup lang="ts">
import initMapResizer from '@/utils/imageMapResizer.ts'
import { SHIRT_DRAWINGS_ID } from '@/data/constants'
import { drawingsCoords, titleCoords } from '@/data/drawings'
import { ref, computed, onMounted } from 'vue'
import { useWindowSize } from '@vueuse/core'

const BREAKPOINT = 768

const { width } = useWindowSize()
const drawings = ref({ ...drawingsCoords })
const title = ref({ ...titleCoords })
const coordsSize = computed(() => (width.value > BREAKPOINT ? 'big' : 'small'))

// TODO Why did I made two different ways of updating area map?
function updateBigCoords() {
  setTimeout(() => {
    initMapResizer()
    window.imageMapResize() // TODO Why I did't use tag or class as function suppose
  }, 500)
}

function updateSmallCoords() {
  const xDiff = (BREAKPOINT - window.innerWidth) / 2
  const yDiff =
    (BREAKPOINT - Math.min(BREAKPOINT, Math.max(window.innerHeight, window.innerWidth))) / 2

  const updateCoord = (value: string, index: number): number => {
    const diff = index % 2 === 0 ? xDiff : yDiff
    return Math.max(+value - diff, 0)
  }

  const updateDrawing = (drawing: Drawing): Drawing => ({
    id: drawing.id,
    name: drawing.name,
    big: drawing.big,
    small: drawing.small.split(',').map(updateCoord).join(','),
  })

  title.value.small = titleCoords.small.split(',').map(updateCoord).join(',')
  drawings.value = drawingsCoords.map(updateDrawing)
}

function updateCoords() {
  if (window.removeResizerListeners) {
    window.removeResizerListeners()
  }
  if (window.innerWidth <= BREAKPOINT) {
    updateSmallCoords()
  } else {
    updateBigCoords()
  }
}

onMounted(() => {
  window.addEventListener('resize', updateCoords)
  updateCoords()
})
</script>

<style scoped>
.left-border-hack {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: var(--white);
  width: 20px;
  height: 100%;
}
.background {
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  /* Image outline */
  outline: 20px solid var(--white);
  outline-offset: -20px;
  width: auto;
  /* Set up proportionate scaling */
  height: 100%;
  /* Disable user select */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 1850px) {
  /* Breakpoint Exception - Crop right bottom angle on image for big screens */
  .background {
    clip-path: polygon(0 0, 96% 0, 88% 100%, 0 100%);
  }
}
@media (max-width: 1440px) and (width > 1024px) {
  /* MacBook HiDPI */
  .left-border-hack {
    display: block;
  }
  .background {
    left: -45px;
  }
}
@media (max-width: 1024px) {
  /* iPad */
  .background {
    position: static;
    width: 100%;
    height: auto;
  }
}
@media (max-width: 768px) {
  /* Small background picture */
  .background {
    object-fit: none;
  }
}
@media (max-width: 768px) and (orientation: portrait) {
  /* Small background picture */
  .background {
    height: 100vh;
    max-height: 768px;
  }
}
@media (max-width: 768px) and (orientation: landscape) {
  /* Small background picture */
  .background {
    height: 100%;
  }
}
@media (min-width: 1920px) and (min-height: 1080px) {
  /* Huge screens */
  .background {
    position: static;
    outline: none;
    outline-offset: initial;
  }
}
</style>
