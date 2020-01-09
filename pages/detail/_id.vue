<template>
  <div>
    <content-box>
      <div slot="main">
        <top-image>
          <img :src="data.detail.image" slot="img" alt />
          <div slot="bottom">
            <h1 style="color:#fff">{{data.detail.title}}</h1>
            <p>
              <span>{{date}}</span>
              <span style="margin-left:10px">{{String(data.detail.readNum)+'次阅读'}}</span>
            </p>
          </div>
        </top-image>
        <div class="detail" v-html="content"></div>
        <a-divider>感谢 阅读</a-divider>
        <next-post :last="data.last" :next="data.next" />
      </div>
      <div slot="sticky">
        <directory :top="top" />
      </div>
    </content-box>
  </div>
</template>


<script>
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/androidstudio.css"; // 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件
import axios from "axios";
import { dateDeal } from "~/util";
import nextPost from "~/components/common/next-post";
import topImage from "~/components/common/top-image";
import ContentBox from "~/components/content-box";
import Directory from "~/components/directory";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
});

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
  inject: ["layout"],
  data() {
    return {
      
    };
  },
  computed: {
    top() {
      return this.layout.top;
    },
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
  methods: {
    scroll(top) {
      this.top = top;
    }
  },
  components: {
    nextPost,
    topImage,
    ContentBox,
    Directory
  }
};
</script>


<style lang="scss" scoped>
.detail {
  padding: 0 10px;
  margin-top: 20px;
}
</style>