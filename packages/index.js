import VueCountUp from './vue-count-up'
VueCountUp.install = function (Vue) {
  if (VueCountUp.install.installed) return
  VueCountUp.install.installed = true
  Vue.component(VueCountUp.name, VueCountUp)
}

if (typeof window !== 'undefined' && window.Vue) {
  VueCountUp.install(window.Vue)
}

export default VueCountUp
