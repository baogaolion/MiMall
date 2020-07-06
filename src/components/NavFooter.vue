<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href='https://www.imooc.com/t/1343480' target="_blank">河畔一角主页</a>
      <span>|</span>
      <a href='https://coding.imooc.com/class/397.html' target="_blank">Vue全栈课程</a>
      <span>|</span>
      <a href='https://coding.imooc.com/class/236.html' target="_blank">React全家桶课程</a>
      <span>|</span>
      <a href='https://coding.imooc.com/class/343.html' target="_blank">微信支付专项课程(H5+小程序+node+Mongo)</a>
    </div>
    <div
      class="copyright"
    >© <span class="domain">mi.com</span>京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: #333;
  color: #999;
  font-size: $fontI;
  text-align: center;
  font-size: 14px;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 14px;
    }
  }
  .footer-link {
    a {
      color: #999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
      .domain{
          color: $colorA;
      }
  }
}
</style>