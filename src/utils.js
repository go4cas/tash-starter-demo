export const buildComponent = (data, methods = {}, init = () => {}) => {
  return () => { return { init, ...data, ...methods } }
}

export const registerComponents = async components => {
  await Object.entries(components).filter(async function ([component]) {
    console.log('get list of components ...')
    return await document.querySelector(`[x-data="${component}()"]`)
  }).forEach(async function ([component, handler]) {
    console.log('create component modules ...')
    await import(handler).then(module => window[component] = module.default)
  })
}
