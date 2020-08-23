import { registerComponents } from './utils.js'
import './store.js'

;(() => {
  registerComponents({
    counter: './components/counter.js',
    toggle: './components/toggle.js'
  })
  
  import('https://cdn.jsdelivr.net/gh/kevinbatdorf/alpine-magic-helpers@0.3.x/dist/index.js')
  import('https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js')
})()
