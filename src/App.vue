
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from "./storage/index";

export default {
  name: "App",
  components: {},
  data() {
    return {
      res: {}
    };
  },
  mounted() { 
    //本地 JSON 调试
    // this.axios.get("/mock/user/login.json").then(res => {
    //   this.res = res;
    // });

    // 通过 easy-mock 平台实现数据mock
    // this.axios.get('').then(res=>{
    //   this.res = res
    // })

    //本地集成 mockjs 实现数据mock
    // this.axios.get('/user/login').then(res => {
    //   this.res = res
    // })
  }
};
</script>

<style>
  @import './assets/scss/reset.scss';
</style>