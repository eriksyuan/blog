<template>
  <div>
    <div class="top">
      <div class="image" :style="'background-image:url('+data.detail.image+')'"></div>
      <header class="article-title">
        <h1>{{data.detail.title}}</h1>
        <p>
          <span>{{date}}</span>
          <span style="margin-left:10px">1312次阅读</span>
        </p>
      </header>
    </div>
    <div class="detail">
      <div v-highlight v-html="content"></div>
    </div>
  </div>
</template>


<script>
import mavonEdit from "mavon-editor";
import marked from "marked";
import axios from "axios";
import { dateDeal } from "~/util";
export default {
  asyncData({ params }) {
    return axios.get("http://localhost:3000/api/detail?id=" + params.id).then(res => {
      return { data: res.data.data };
    });
  },
  computed: {
    content() {
      return marked(this.data.detail.content);
    },
    date() {
      return dateDeal(this.data.detail.createTime);
    }
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
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
.detail {
  padding: 0 10px;
  margin-top: 20px;
}
</style>