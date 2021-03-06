// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import directive from '@/directive/index'
import basicSidebar from 'basic-sidebar'

Vue.config.productionTip = false

Vue.use(elementui)
Vue.use(directive)
Vue.use(basicSidebar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
