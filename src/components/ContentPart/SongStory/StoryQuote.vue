<template>
  <div class="quote">
    <p class="quote-line quote-line_long"><span class="quote-mark"></span></p>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
      mode="out-in"
    >
      <div class="quote-text" v-if="quoteSelectorLang === 'ru'" v-html="quoteEn"></div>
      <div class="quote-text" v-else v-html="quoteRu"></div>
    </transition>
    <p class="quote-line quote-line_short">
      <span
        v-aimed-cursor
        v-expandable-cursor
        class="quote-button"
        @click="toggleQuoteLanguage()"
        >{{ quoteSelectorLang }}</span
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, watch } from 'vue'

const props = defineProps<{
  quoteTextEn: Story['quoteTextEn']
  quoteTextRu: Story['quoteTextRu']
}>()

const quoteSelectorLang = ref<'ru' | 'en'>('ru')
const quoteEn = ref('')
const quoteRu = ref('')

watch(
  () => props.quoteTextEn,
  () => {
    quoteSelectorLang.value = 'ru'
    quoteEn.value = wrapCharactersInTags(props.quoteTextEn)
    quoteRu.value = wrapCharactersInTags(props.quoteTextRu)
  },
)

function toggleQuoteLanguage() {
  quoteSelectorLang.value = quoteSelectorLang.value === 'en' ? 'ru' : 'en'
}

function wrapCharactersInTags(quote: Story['quoteTextEn']) {
  const lines = quote.split('<br>')
  const newlines = lines.map((line) => {
    const newline = line
      .split('')
      .map((char) => {
        let newChar = char
        if (char === ' ') {
          newChar = '&nbsp;'
        }
        return `<span class='char'>${newChar}</span>`
      })
      .join('')
    return `<p>${newline}</p>`
  })
  return newlines.join('')
}

function beforeEnter(el: Element) {
  el.childNodes.forEach((line) => {
    line.childNodes.forEach((char) => {
      if (char instanceof HTMLElement) {
        char.style.transform = 'rotateY(90deg)'
      }
    })
  })
}

function enter(el: Element, done: () => void) {
  let degree = 0
  const rotateEveryChar = () => {
    el.childNodes.forEach((line) => {
      line.childNodes.forEach((char) => {
        if (char instanceof HTMLElement) {
          char.style.transform = `rotateY(${-(270 + degree)}deg)`
        }
      })
    })
  }
  const interval = setInterval(() => {
    rotateEveryChar()
    degree += 6
    if (degree > 90) {
      clearInterval(interval)
      done()
    }
  }, 1)
}

function leave(el: Element, done: () => void) {
  let degree = 0
  const rotateEveryChar = () => {
    el.childNodes.forEach((line) => {
      line.childNodes.forEach((char) => {
        if (char instanceof HTMLElement) {
          char.style.transform = `rotateY(${degree}deg)`
        }
      })
    })
  }
  const interval = setInterval(() => {
    rotateEveryChar()
    degree += 3
    if (degree > 90) {
      clearInterval(interval)
      done()
    }
  }, 1)
}

onBeforeMount(() => {
  quoteEn.value = wrapCharactersInTags(props.quoteTextEn)
  quoteRu.value = wrapCharactersInTags(props.quoteTextRu)
})
</script>

<style>
.quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
}
.quote-line {
  display: flex;
  flex-direction: row;
}
.quote-line:before,
.quote-line:after {
  flex: 1 1;
  margin: auto;
  border-bottom: 1px solid var(--black);
  content: '';
}
.quote-line:before {
  margin-right: 15px;
}
.quote-line:after {
  margin-left: 15px;
}
.quote-line_long {
  margin-bottom: 23px;
  width: 575px;
}
.quote-line_short {
  width: 420px;
}
.quote-text {
  display: block;
  margin-bottom: 20px;
  font-size: var(--font-m);
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: center;
}
.quote-mark {
  background-image: url(@/assets/sprite.svg);
  background-position: 94% 61%;
  background-size: 800px auto;
  width: 40px;
  height: 20px;
}
.quote-button {
  width: 20px;
  font-weight: 700;
  font-size: var(--font-l);
  text-align: center;
}
.char {
  display: inline-block;
}
@media (width > 600px) and (height < 900px) {
  .quote {
    margin-bottom: 15px;
  }
}
@media (max-width: 600px) {
  .quote {
    margin-bottom: 30px;
  }
  .quote-line_long {
    margin-bottom: 10px;
    width: 270px;
  }
  .quote-line_short {
    width: 200px;
  }
  .quote-mark {
    background-size: 550px auto;
    width: 29px;
    height: 14px;
  }
  .quote-button {
    font-size: var(--font-s);
  }
  .quote-text {
    margin-bottom: 10px;
    font-size: var(--font-s);
  }
}
</style>
