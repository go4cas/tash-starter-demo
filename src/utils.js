export const buildComponent = (data, methods = {}, init = () => {}) => {
  return () => { return { init, ...data, ...methods } }
}

export const registerComponents = components => {
  Object.entries(components).filter(function ([component]) {
    console.log('get list of components ...')
    return document.querySelector(`[x-data="${component}()"]`)
  }).forEach(function ([component, handler]) {
    console.log('create component modules ...')
    import(handler).then(module => window[component] = module.default)
  })
}
