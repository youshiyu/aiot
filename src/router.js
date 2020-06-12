import Vue from 'vue'
import Router from 'vue-router'
//路由转换

// import Home from './views/home.vue'
// import Search from './views/search.vue'
// import Settings from './views/settings.vue'
// import Friends from './views/friends.vue'

//懒加载
const Home = ()=>import('./views/home.vue')
const Search= ()=>import('./views/search.vue')
// const Settings= ()=>import('./views/settings.vue')
const Friends= ()=>import('./views/friends.vue')
// const Songs=()=>import('./views/songs.vue')
//const News=()=>import('./views/news.vue')
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
  
  ],
  mode:"hash"
})

export default router 
