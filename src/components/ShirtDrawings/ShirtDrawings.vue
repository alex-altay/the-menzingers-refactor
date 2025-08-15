<template>
  <div :id="SHIRT_DRAWINGS_ID" class="shirt-drawings">
    <DesktopImage v-if="width > BREAKPOINT" />
    <MobileImage v-else />
  </div>
</template>

<script setup lang="ts">
import DesktopImage from '@/components/ShirtDrawings/DesktopImage.vue'
import MobileImage from '@/components/ShirtDrawings/MobileImage.vue'
import { BREAKPOINT, SHIRT_DRAWINGS_ID } from '@/data/constants'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>
