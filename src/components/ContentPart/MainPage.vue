<template>
  <div>
    <p class="paragraph long-margin">
      The Menzingers невероятная группа, я люблю их&nbsp;мерч и&nbsp;однажды мне стало любопытно о
      чём говорят рисунки на этой футболке. Каждый рисунок ожидаемо оказался связан с одной
      из&nbsp;песен. Если вам интересно чем, наводите на&nbsp;футболку и&nbsp;кликайте
      на&nbsp;рисунок. Чаще всего я понятия не&nbsp;имею "что хотел сказать автор", а интерпретация
      это просто моё мнение
    </p>
    <p v-hidden-cursor class="paragraph long-margin">
      Картинки с&nbsp;футболки нарисовал преступно талантливый иллюстратор Craig&nbsp;Horky, вот его
      <a class="link" href="https://www.craighorky.com/" target="_blank">сайт</a>
      <span class="no-wrap">
        и
        <a class="link" href="https://www.instagram.com/craighorky/" target="_blank"
          >инстаграм</a
        ></span
      >. Там куча другого-всякого, активно рекомендую
    </p>
    <p v-hidden-cursor class="paragraph long-margin">
      <span class="desktop-hidden"
        >Этот сайт работает на смартфонах и планшетах, но&nbsp;лучше смотреть его с&nbsp;экрана
        компьютера.
      </span>
      Мнения, проклятия, восторги или предложения можно писать в&nbsp;<a
        class="link"
        href="https://t.me/altayna"
        target="_blank"
        >телеграм</a
      >&nbsp;или <a class="link" href="https://vk.com/trutanov.alex" target="_blank">вк</a>
    </p>
    <p v-hidden-cursor class="paragraph long-margin">
      Официальный сайт The Menzingers
      <a class="link" href="https://themenzingers.com/" target="_blank">здесь</a>
    </p>
    <p class="paragraph last-margin">Привет</p>
    <BandLogo />
  </div>
</template>

<script setup lang="ts">
import BandLogo from '@/components/ContentPart/BandLogo.vue'
</script>

<style scoped>
.long-margin {
  margin-bottom: 30px;

  @media (max-width: 600px) {
    margin-bottom: 13px;
  }
}
.last-margin {
  margin-bottom: 0;

  @media (height > 1080px) {
    margin-bottom: 30px;
  }
}
</style>
