<template>
  <div>
    <StoryTitle :songName="story.songName" :albumName="story.albumName" />
    <StoryQuote :quoteTextEn="story.quoteTextEn" :quoteTextRu="story.quoteTextRu" />
    <div v-hidden-cursor class="story" v-html="story.story"></div>
    <StreamingLinks
      :geniusLink="story.geniusLink"
      :appleMusicLink="story.appleMusicLink"
      :spotifyLink="story.spotifyLink"
      :youtubeMusicLink="story.youtubeMusicLink"
      :yandexMusicLink="story.yandexMusicLink"
    />
  </div>
</template>

<script setup lang="ts">
import StoryQuote from '@/components/ContentPart/SongStory/StoryQuote.vue'
import StoryTitle from '@/components/ContentPart/SongStory/StoryTitle.vue'
import StreamingLinks from '@/components/ContentPart/SongStory/StreamingLinks.vue'
import stories from '@/data/stories.ts'
import { ref, onBeforeMount, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ activeStory: string }>()
const story = ref<Story>(stories[0])

function updateStory(storyName: string) {
  const songStory = stories.find((story) => storyName === story.name)
  if (songStory) {
    story.value = songStory
  } else {
    useRouter().push('/')
  }
}

watch(
  () => props.activeStory,
  (newStory) => updateStory(newStory),
)

onBeforeMount(() => updateStory(props.activeStory))
</script>

<style>
.story p:not(:last-child) {
  margin-bottom: 13px;
}

.story {
  margin-bottom: 43px;

  @media (width <= 600px) {
    margin-bottom: 25px;
  }

  @media (width > 600px) and (height < 900px) {
    margin-bottom: 10px;
  }
}
</style>
