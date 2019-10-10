<template>
  <div id="app">
    <myHeader class="header"></myHeader>
    <router-view v-wechat-title='$route.meta.title'></router-view>
    <myFooter class="footer"></myFooter>
  </div>
</template>

<script>
import myHeader from './components/header.vue'
import myFooter from './components/footer.vue'

export default {
  name: 'app',
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style scoped>
@import './static/css/base.css';
</style>
