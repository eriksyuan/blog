<template>
  <div class="container">
    <top-image title="艾瑞克是羊">
      <img slot="img" src="~/assets/imgs/index.gif" alt />

      <div class="title" slot="center">
        <h1>记得感恩!</h1>
        <p>每一件自己觉得值得的事，都不留余力的去做</p>
      </div>
    </top-image>
    <div class="content">
      <article-card
        v-for="(item,index) of articles"
        :article="item"
        :key="index"
        :start="index%2==0?'right':''"
      />
    </div>
  </div>
</template>

<script>
import TopImage from "~/components/common/top-image";
import ArticleCard from "~/components/common/article-card.vue";
import axios from "axios";
export default {
  asyncData() {
    return axios.get("http://localhost:3000/api/articles").then(res => {
      return { articles: res.data.data.articles };
    });
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    ArticleCard,
    TopImage
  }
};
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
</style>
