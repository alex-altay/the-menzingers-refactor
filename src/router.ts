import MainPage from '@/components/ContentPart/MainPage.vue'
import SongStory from '@/components/ContentPart/SongStory/SongStory.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useTitle } from '@vueuse/core'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'main', component: MainPage },
    { path: '/:activeStory', component: SongStory, props: true },
  ],
  scrollBehavior() {
    return {
      el: 'body',
      behavior: 'smooth',
    }
  },
})

router.afterEach((to) => {
  const title = useTitle()
  if (to.name === 'main') {
    title.value = 'The Menzingers Shirt - Stories From Drawings'
  } else {
    const storyName = Array.isArray(to.params.activeStory)
      ? to.params.activeStory[0]
      : to.params.activeStory
    const capitalizedName = storyName.charAt(0).toUpperCase() + storyName.slice(1)
    title.value = `The Menzingers Shirt - ${capitalizedName}`
  }
})

export default router
