export const buildComponent = (data, methods = {}, init = () => {}) => {
  return () => { return { init, ...data, ...methods } }
}

export const registerComponents = components => {
  Object.entries(components).filter(function ([component]) {
    return document.querySelector(`[x-data="${component}()"]`)
  }).forEach(function ([component, handler]) {
    console.log(component)
    console.log(handler)
    import(handler).then(module => window[component] = module.default)
  })
}
