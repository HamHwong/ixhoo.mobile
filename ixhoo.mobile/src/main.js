// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '../mock/mock.config.js'

/* VUX UI components import */
import {
  ViewBox,
  XHeader,
  Flexbox,
  FlexboxItem,
  XButton
} from 'vux'
Vue.component('view-box', ViewBox)
Vue.component('x-header', XHeader)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('x-button', XButton)

Vue.config.productionTip = false
/* Enabled axios, use it in project via call 'this.$http' */
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
