export const buildComponent = async (data, methods = {}, init = () => {}) => {
  return async () => { return { init, ...data, ...methods } }
}

export const registerComponents = components => {
  Object.entries(components).filter(function ([component]) {
    return document.querySelector(`[x-data="${component}()"]`)
  }).forEach(function ([component, handler]) {
    import(handler).then(module => window[component] = module.default).catch(error => console.error(error))
  })
}
