<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-warp">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="item in menuList" v-bind:key="item.id">
                  <li v-for="sub in item" v-bind:key="sub.id">
                    <a v-bind:href="sub?'/#/product/'+ sub.id:''">
                      <img v-bind:src="sub?sub.img: '/imgs/item-box-1.png'" />
                      {{sub?sub.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide class="swiper-slide" v-for="item in slideList" v-bind:key="item.id">
            <a v-bind:href="'/#/product/' + item.id">
              <img v-bind:src="item.img" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a v-bind:href="'/#/product/' + item.id" v-for="item in adsList" v-bind:key="item.id">
          <img v-bind:src="item.img" alt />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt />
        </a>
      </div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar
  },
  data() {
    return {
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "47",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "48",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "RedMi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        { id: 33, img: "/imgs/ads/ads-1.png" },
        { id: 48, img: "/imgs/ads/ads-2.jpg" },
        { id: 45, img: "/imgs/ads/ads-3.png" },
        { id: 47, img: "/imgs/ads/ads-4.jpg" }
      ],
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true
        },
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: false,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";

.index {
  .swiper-box {
    .nav-menu {
      padding: 26px 0;
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      box-sizing: border-box; // 固定宽高，不受 padding 影响
      background-color: #55585aa8;
      .menu-warp {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            display: block;
            position: relative;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            &:after {
              content: " ";
              position: absolute;
              right: 30px;
              top: 17.5px;
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 450px;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            background: #fff;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 3px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }

  .banner{
    margin-bottom: 50px;
  }
}
</style>