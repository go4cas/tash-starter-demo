import { buildComponent } from '../utils.js'

const data = {
  open: false,
}

const methods = {
  show() {
    this.open = true
  },
  hide() {
    this.open = false
  }
}

const init = (() => {
  console.log('toggle is here!!')
})

export default buildComponent(data, methods, init)
