<template>
  <div class="container">
    <div class="content">
      <article-card v-for="(item,index) of articles" :article="item" :key="index" :start="index%2==0?'right':''" />
    </div>
  </div>
</template>

<script>
import ArticleCard from "~/components/common/article-card.vue";
import axios from 'axios'
export default {
  layout:'index',
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
   return axios.get('http://localhost:3000/api/articles').then(res=>{
      return {articles:res.data.data.articles}
    })
  },
  data() {
    return {
      
    };
  },
  mounted(){
    
  },
  methods:{
  },
  components: {
    ArticleCard
  }
};
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.container {
  width: 100%;
  .content {
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
