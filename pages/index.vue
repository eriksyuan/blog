<template>
  <div class="container">
    <div class="content">
      <top-image
        title="艾瑞克是羊"
        image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577886089227&di=94d84cdc17fcad140c4ac79afc61e92c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170925%2Fab24599589ab4f8e926956c70d5fe4b5.gif"
      />
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
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
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
.container {
  width: 100%;
  

  .content {
    background-color: rgba(255, 255, 255, 0.3);
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    // height: 100vh;
    // background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
