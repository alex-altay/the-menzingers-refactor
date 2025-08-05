import type { App } from 'vue'

function addLinkListeners(el: HTMLElement) {
  el.querySelectorAll('.link').forEach((link) => {
    link.addEventListener('mouseenter', () => {
      document.documentElement.classList.add('hidden-cursor')
    })
    link.addEventListener('mouseleave', () => {
      document.documentElement.classList.remove('hidden-cursor')
    })
  })
}

const cursorDirectives = {
  expandableCursor: {
    mounted: (el: HTMLElement) => {
      el.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault()
        document.documentElement.classList.add('expandable-cursor')
        document.documentElement.classList.add('hidden-dot')
        setTimeout(() => {
          document.documentElement.classList.remove('expandable-cursor')
          document.documentElement.classList.remove('hidden-dot')
        }, 550)
      })
    },
  },

  aimedCursor: {
    mounted: (el: HTMLElement) => {
      el.addEventListener('mouseenter', () => {
        document.documentElement.classList.add('aimed-cursor')
      })
      el.addEventListener('mouseleave', () => {
        document.documentElement.classList.remove('aimed-cursor')
      })
    },
    unmounted: () => {
      document.documentElement.classList.remove('aimed-cursor')
    },
  },

  hiddenCursor: {
    mounted: addLinkListeners,
    updated: addLinkListeners,
    unmounted: () => {
      document.documentElement.classList.remove('hidden-cursor')
    },
  },
}

export function addCursorDirectives(app: App) {
  for (const [name, directive] of Object.entries(cursorDirectives)) {
    app.directive(name, directive)
  }
}
