// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'ai-sdk'
import Vue from 'vue'
import Element from 'element-ui'
import FastClick from 'fastclick' // 解决手机点击默认300毫秒延迟
import App from './App'
import router from './router'
import store from './store'
import './utils/rem'
import 'src/theme/index.scss'
import 'src/assets/css/common.scss'

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function () {
      FastClick.attach(document.body)
    },
    false
  )
}

// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.use(Element, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
