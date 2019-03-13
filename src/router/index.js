import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.config'

Vue.use(Router)

export default new Router({
  routes
  // scrollBehavior (to, from, savedPosition) {
  //   // 控制滚动行为
  //   console.log(to, from, savedPosition)
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     if (from.meta.keepAlive) {
  //       from.meta.savedPosition = document.body.scrollTop
  //     }
  //     return { x: 0, y: to.meta.savedPosition || 0 }
  //   }
  // }
})
