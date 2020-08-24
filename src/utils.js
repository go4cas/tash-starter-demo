export const buildComponent = (data, methods = {}, init = () => {}) => {
  return () => { return { init, ...data, ...methods } }
}

export const registerComponents = components => {
  Object.entries(components).filter(function ([component]) {
    return document.querySelector(`[x-data="${component}()"]`)
  }).forEach(async function ([component, handler]) {
    await import(handler).then(async module => window[component] = await module.default).catch(error => console.error(error))
  })
}
