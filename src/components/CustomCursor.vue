<template>
  <div class="cursor" :style="styleObject"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const BORDER = 10
const HIDE_DISTANCE = 50
const FOLLOW_DISTANCE = 16

const styleObject = ref({
  top: `-${HIDE_DISTANCE}px`,
  left: `-${HIDE_DISTANCE}px`,
})

function update(event: MouseEvent) {
  styleObject.value.top = `${event.pageY - FOLLOW_DISTANCE}px`
  styleObject.value.left = `${event.pageX - FOLLOW_DISTANCE}px`
}

function hide(event: MouseEvent) {
  if (event.pageY < BORDER) {
    styleObject.value.top = `-${HIDE_DISTANCE}px`
  } else if (event.pageY > window.innerHeight - BORDER) {
    styleObject.value.top = `${window.innerHeight + HIDE_DISTANCE}px`
  } else if (event.pageX < BORDER) {
    styleObject.value.left = `-${HIDE_DISTANCE}px`
  } else if (event.pageX > window.innerWidth - BORDER) {
    styleObject.value.left = `${window.innerWidth + HIDE_DISTANCE}px`
  }
}

onMounted(() => {
  window.addEventListener('mousemove', update)
  window.addEventListener('mouseout', hide)
  window.addEventListener(
    'wheel',
    (event: WheelEvent) => (styleObject.value.top = `${event.pageY}px`),
  )
})
onUnmounted(() => {
  window.removeEventListener('mousemove', update)
  window.removeEventListener('mouseout', hide)
})
</script>

<style>
html {
  cursor: var(--cursor-color-black), auto;

  &:not(.aimed-cursor) .shirt-drawings {
    cursor: var(--cursor-color-almost-white), auto;
  }

  &.aimed-cursor {
    cursor: var(--cursor-color-aimed), auto;
  }

  &.hidden-dot {
    cursor: var(--cursor-color-hidden), auto;
  }
}

.cursor {
  display: block;
  position: absolute;
  top: var(--cursor-radius);
  /* to hide cursor from visible area when mouse initially out of the page (on tab or address line) */
  left: var(--cursor-radius);
  z-index: 9999;
  z-index: 2;
  animation-timing-function: ease-out;
  transition-duration: 200ms;
  border: 2px solid var(--cursor-border);
  border-radius: 50%;
  width: var(--cursor-radius);
  height: var(--cursor-radius);
  pointer-events: none;
}

.aimed-cursor .cursor {
  border: 2px solid var(--aimed);
}

.expandable-cursor .cursor {
  transform: scale(1.5);
  animation: clickAnimation 0.5s forwards;
}

.hidden-cursor .cursor {
  display: none;
}

@keyframes clickAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    opacity: 0;
  }
}
</style>
