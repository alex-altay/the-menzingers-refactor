<template>
  <div>
    <p class="paragraph services-title">Читать весь текст и слушать песню:</p>
    <div class="services">
      <a class="service" :href="geniusLink" target="_blank">
        <div class="image genius"></div>
        <p class="name">Genius</p>
      </a>
      <a class="service" :href="appleMusicLink" target="_blank">
        <div class="image apple"></div>
        <p class="name">Apple Music</p>
      </a>
      <a class="service" :href="spotifyLink" target="_blank">
        <div class="image spotify"></div>
        <p class="name">Spotify</p>
      </a>
      <a class="service" :href="youtubeMusicLink" target="_blank">
        <div class="image youtube"></div>
        <p class="name">YouTube Music</p>
      </a>
      <a v-if="yandexMusicLink" class="service" :href="yandexMusicLink" target="_blank">
        <div class="image yandex"></div>
        <p class="name">Яндекс Музыка</p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  geniusLink: Story['geniusLink']
  appleMusicLink: Story['appleMusicLink']
  spotifyLink: Story['spotifyLink']
  youtubeMusicLink: Story['youtubeMusicLink']
  yandexMusicLink: Story['yandexMusicLink']
}>()
</script>

<style scoped>
.services-title {
  margin-bottom: 13px;
  text-align: center;
}

.services {
  display: flex;
  row-gap: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: inherit;
  width: 100px;
  text-decoration: none;

  .name {
    color: var(--black);
    font-size: var(--font-xs);
  }

  .image {
    margin-bottom: 10px;
    background-image: url(@/assets/sprite.svg);
    background-size: 800px auto;
    width: 38px;
    height: 50px;
  }

  .genius {
    background-position: -600px 0;
  }
  .apple {
    background-position: -640px 0;
  }
  .spotify {
    background-position: -680px 0;
  }
  .youtube {
    background-position: -720px 0;
  }
  .yandex {
    background-position: -760px 0;
  }

  &:hover .genius {
    background-position: -600px -50px;
  }
  &:hover .apple {
    background-position: -640px -50px;
  }
  &:hover .spotify {
    background-position: -680px -50px;
  }
  &:hover .youtube {
    background-position: -720px -50px;
  }
  &:hover .yandex {
    background-position: -760px -50px;
  }
}
</style>
