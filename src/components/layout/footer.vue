<template>
  <van-tabbar v-model="active"
              active-color="#07c160"
              @change="tabClick">

    <van-tabbar-item icon="home-o"
                     @click='changetohome'>行踪记录</van-tabbar-item>
    <!-- <van-tabbar-item icon="search"    @click='changetosearch'>搜索</van-tabbar-item> -->
    <van-tabbar-item icon="friends-o"
                     @click='changetofriend'>相关信息</van-tabbar-item>
    <!-- <van-tabbar-item icon="setting-o"  @click='changetosettings'>设置</van-tabbar-item> -->
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'; //注意导入
export default {  //同时暴露出去
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  props: {
    index: {
      type: Number,
      default: 0
    },

  },
  data () {
    return {
      active: this.index,
    }

  },
  methods: {
    tabClick () {
      // this.$router.replace("/home");    
      console.log('click tab')
    },
    changetohome () {
      this.$router.replace("/home")
    },
    changetosearch () {
      this.$router.replace("/search")
    },
    changetofriend () {
      this.$router.replace("/friends")
    },
    changetosettings () {
      this.$router.replace("/settings")
    }

  },
}
</script>
<style lang="scss" scoped>
</style>