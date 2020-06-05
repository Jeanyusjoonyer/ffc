import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.prototype.$eventHub = new Vue()

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
