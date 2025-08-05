<template>
  <div class="title">
    <h3 class="pretitle">песня / альбом</h3>
    <h2 class="names">{{ songName }} / {{ albumName }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  songName: Story['songName']
  albumName: Story['albumName']
}>()
</script>

<style scoped>
.title {
  margin-top: -10px;
  margin-bottom: 48px;
  text-align: center;

  @media (width <= 600px) {
    margin-bottom: 43px;
  }
  @media (width > 600px) and (height < 900px) {
    margin-bottom: 23px;
  }
}
.pretitle {
  padding-bottom: 5px;
  font-size: var(--font-xs);
}
.names {
  font-weight: 700;
  font-size: var(--font-xl);

  @media (max-width: 600px) {
    font-size: var(--font-l);
  }
}
</style>
