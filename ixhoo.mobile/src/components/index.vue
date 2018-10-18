<template>
  <h1 @click="hello()">Hello World</h1>
</template>
<script>
export default {
  name: 'MainPage',
  methods: {
    hello: function() {
      console.log('hello VUE again')
    }
  }
}
</script>
<style>
</style>
