<template>
  <div>
    <top-image type="detail" :title="data.detail.title" :time="date" :image="data.detail.image" :readNum="String(data.detail.readNum)" />
    <div class="detail" v-highlight v-html="content"></div>
    <a-divider >感谢 阅读</a-divider>
    <next-post :last="data.last" :next="data.next"/>
  </div>
</template>


<script>
import mavonEdit from "mavon-editor";
import marked from "marked";
import axios from "axios";
import { dateDeal } from "~/util";
import nextPost from "~/components/common/next-post";
import topImage from '~/components/common/top-image'
export default {
  asyncData({ params, redirect }) {
    return axios
      .get("http://localhost:3000/api/detail?id=" + params.id)
      .then(res => {
        if (res.data.status === 0) {
          return { data: res.data.data };
        } else {
          return redirect("/404");
        }
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
  head() {
    return {
      title: this.data.detail.title
    };
  },
  methods: {},
  components: {
    nextPost,
    topImage
  }
};
</script>


<style lang="scss" scoped>
.detail {
  padding: 0 10px;
  margin-top: 20px;
}
</style>