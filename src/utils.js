export const buildComponent = (data, methods = {}, init = () => {}) => {
  return () => { return { init, ...data, ...methods } }
}

export const registerComponents = components => {
  return new Promise((resolve, reject) => {
    resolve(Object.entries(components).filter(function ([component]) {
      return document.querySelector(`[x-data="${component}()"]`)
    }).forEach(function ([component, handler]) {
      import(handler).then(module => window[component] = module.default).catch(error => reject(error))
    }))
  })
}
