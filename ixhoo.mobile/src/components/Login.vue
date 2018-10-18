<template>
<div>
  <flexbox orient="vertical">
    <!-- 输入框 -->
    <flexbox-item >
      <group>
        <x-input title="用户名" v-model="account" ></x-input>
      </group>
    </flexbox-item>
    <flexbox-item>
        <group>
          <x-input title="密码" v-model="password"></x-input>
        </group>
    </flexbox-item>
  </flexbox>
  <!-- 按钮 -->
  <flexbox>
    <flexbox-item>
      <x-button type="primary" >登录</x-button>
    </flexbox-item>
    <flexbox-item>
      <x-button>注册</x-button>
    </flexbox-item>
  </flexbox>
</div>
</template>

<script>
import { Group, XInput } from 'vux'
export default {
  name: 'Login',
  components: {
    Group,
    XInput
  },
  methods: {
    login: () => {
      console.log('success!')
    }
  },
  data: function() {
    return {
      account: '',
      password: ''
    }
  }
}
</script>
<style scoped>
</style>
