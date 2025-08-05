declare global {
  interface Window {
    imageMapResize: () => void
    removeResizerListeners: () => void
  }
}

export {}
