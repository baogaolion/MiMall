
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
    this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser() {
      this.axios.get("/user").then(() => {
        // to-do 保存到 vuex
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then(() => {
        // to-do 保存到 vuex
      });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>