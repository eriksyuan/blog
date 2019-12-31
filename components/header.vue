<template>
  <header class="index" :style="{height:bgcHeight==0?'100vh':bgcHeight+'px'}">
    <div :class="{scrolled:scrolled,header:true}">
      <div class="contain">
        <div class="left-logo">
          <p>艾瑞克是羊</p>
        </div>
        <ul class="menu-box">
          <a-menu class="menu" mode="horizontal" :selectable="false" theme="light">
            <a-menu-item key="home">
              <a href="/">
                <a-icon type="home" />首页
              </a>
            </a-menu-item>
            <a-menu-item key="book">
              <a-icon type="book" />文章
            </a-menu-item>
          </a-menu>
        </ul>
      </div>
    </div>
    <div class="bgimg" :style="{height:bgcHeight==0?'100vh'+'px':bgcHeight+'px'}">
      <div class="text">
        <h1 class="title">{{timeFilter}}</h1>
      </div>
    </div>
  </header>
</template>


<script>
import { timeFix } from "~/util";

export default {
  data() {
    return {
      backColor: "",
      scrolled: false,
      topLineStyle: {
        top: "-100rem"
      },
      scrollTop: 0
    };
  },
  props: {
    headerInfo: {
      default: {}
    },
    bgcHeight: {
      default: 0
    }
  },
  computed: {
    timeFilter() {
      return timeFix();
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
      // eslint-disable-next-line no-console
      if (scrollTop >= 2) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    }
  },
  components: {}
};
</script>


<style lang="scss" scope>
header.index {
  height: 100vh;
  width: 100%;
  .bgimg {
    background-image: url(/imgs/home.jpg);
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
    font-size: none;
    z-index: 0;
    top: 0;
    position: relative;
    .text {
      top: 0;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      width: 50%;
      margin: auto;
      height: 50px;
      .title {
        font-size: 30px;
        text-align: center;
        color: #fff;
        font-size: 80px;
      }
    }
  }
  .header.scrolled {
    background-color: #fff;
  }
  .header {
    background: none;
    top: 0;
    position: fixed;
    height: 65px;
    color: #fff;
    width: 100%;
    z-index: 11;
    box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.5);
    .contain {
      max-width: 1140px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left-logo {
        font-size: 2rem;
        color: #333;
      }
      .menu-box {
        margin: 0;
        .menu {
          background-color: transparent;
          border: none;
          line-height: 65px;
        }
      }
    }
  }
}
</style>