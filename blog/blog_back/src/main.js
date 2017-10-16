// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)
import axios from 'axios'
import vueAxios from 'vue-axios'
import Vuex from 'vuex'
Vue.use(vueAxios, axios)

import elementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(elementUi)
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
