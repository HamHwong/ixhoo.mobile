<template>
<div id="app" style="height:100%;">
  <view-box ref="viewBox">
    <router-view></router-view>
    <tabbar slot="bottom" v-if="isLogin">
      <tabbar-item badge="a">
        <img slot="icon" src="./assets/icons/首页.svg"/>
        <img slot="icon-active" src="./assets/icons/首页_selected.svg"/>
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item badge="a">
        <img slot="icon" src="./assets/icons/表情.svg"/>
        <img slot="icon-active" src="./assets/icons/表情_selected.svg"/>
        <span slot="label">圈子</span>
      </tabbar-item>
      <tabbar-item badge="a">
        <img slot="icon" src="./assets/icons/扫一扫.svg"/>
        <img slot="icon-active" src="./assets/icons/扫一扫_selected.svg"/>
        <span slot="label">验证</span>
      </tabbar-item>
      <tabbar-item badge="a">
        <img slot="icon" src="./assets/icons/待处理.svg"/>
        <img slot="icon-active" src="./assets/icons/待处理_selected.svg"/>
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item badge="a">
        <img slot="icon" src="./assets/icons/个人.svg"/>
        <img slot="icon-active" src="./assets/icons/个人_selected.svg"/>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</div>
</template>

<script>
import { Tabbar, TabbarItem, cookie } from 'vux'
export default {
  name: 'App',
  components: {
    Tabbar,
    TabbarItem
  },
  created: function() {
    this.$http({
      url: '/testMock',
      method: 'post'
    }).then(e => {
      console.log(e)
      console.log('done')
    })
    console.log(this.$route.path)
  },
  computed: {
    isLogin: function() {
      return cookie.get('user')
    }
  },
  data: function() {
    return {
      login: true
    }
  },
  methods: {}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
