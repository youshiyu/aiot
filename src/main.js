import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss'
import '@/utils/vant'
import FastClick from 'fastclick'
import VueAMap from 'vue-amap'

Vue.use(VueAMap)
FastClick.attach(document.body)



// Vue.use(VueScroller)

Vue.config.productionTip = false


// window.VueAMap.initAMapApiLoader({
//   key: '71e66261cc433c3ff270f259657203fd',
//   plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
//   // 默认高德 sdk 版本为 1.4.4
//   v: '1.4.4'
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
