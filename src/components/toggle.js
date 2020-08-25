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

const toggle = buildComponent(data, methods, init)

export default toggle
