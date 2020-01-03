<template>
  <div class="top">
    <div class="image" :style="'background-image:url('+image+')'"></div>
    <header class="article-title">
      <h1>{{title}}</h1>
      <p v-if="type==='detail'">
        <span>{{time}}</span>
        <span style="margin-left:10px">{{readNum+'次阅读'}}</span>
      </p>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => {
        return "";
      }
    },
    type: {
      type: String,
      default: () => {
        return "";
      }
    },
    time: {
      type: String,
      default: () => {
        return "";
      }
    },
    readNum: {
      type: String,
      default: () => {
        return "";
      }
    },
    image: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.top {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .image {
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .article-title {
    padding: 20px;
    position: absolute;
    bottom: 0;
    color: #fff;
    z-index: 11;
    h1 {
      color: #fff;
    }
  }
}
</style>