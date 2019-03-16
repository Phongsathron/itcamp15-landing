import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 800,
  easing: 'ease-in-out',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  render: h => h(App)
}).$mount('#app')
