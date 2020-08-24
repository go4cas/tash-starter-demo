import { registerComponents } from './utils.js'
import './store.js'

;(() => {
  console.log('registering components...')
  registerComponents({
    toggle: './components/toggle.js'
  })
  
  console.log('importing magic helpers script...')
  import('https://cdn.jsdelivr.net/gh/kevinbatdorf/alpine-magic-helpers@0.3.x/dist/index.js')
  console.log('importing alpine script...')
  import('https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js')
})()
