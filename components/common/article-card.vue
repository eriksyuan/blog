<template>
  <div class="card hvr-glow">
    <a :href="'/detail/'+article._id">
      <div class="article-box" :class="start=='right'?'right':''">
        <div class="image">
          <img class="hvr-grow" :src="article.image" alt />
        </div>
        <div class="text">
          <p>
            <a-icon type="clock-circle" />
            发布于{{date}}
          </p>
          <p class="title text2">{{article.title}}</p>
          <div class="row">
            <p class="text1">
              <a-icon type="eye" />
              {{article.readNum}}热度
            </p>
            <!-- <p class="text1">
              <a-icon type="message" />
              {{article.comment.length}}评论
            </p> -->
            <p class="text1">
              <a-icon type="folder" />
              {{article.classify.name}}
            </p>
          </div>
          <p class="text3">{{article.description}}</p>
        </div>
      </div>
    </a>
  </div>
</template>



<script>
import moment from "moment";
import { dateDeal } from "~/util";
export default {
  props: {
    start: {
      default() {
        return "left";
      },
      type: String
    },
    article: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    date() {
      return dateDeal(this.article.createTime);
    }
  },
  methods: {}
};
</script>


<style lang="scss" scope>
.card {
  width: 72rem;
  height: 30rem;
  border-radius: 2rem;
  box-shadow: 0 0 0.8rem rgba($color: #000000, $alpha: 0.3);
  overflow: hidden;
  margin: 4rem 0;
  .right {
    flex-direction: row-reverse;
    
  }
  .article-box {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    .image {
      height: 30rem;
      width: 55%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 2rem;
      flex: 1;
      color:#777;
      .title {
        font-size: 2rem;
        font-weight: bold;
        color: #333;
      }
      .row {
        display: flex;
        justify-content: space-around;
      }
    }
  }
}
</style>