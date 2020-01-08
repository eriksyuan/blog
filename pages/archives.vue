<template>
  <div class="container">
    <top-image title="艾瑞克是羊">
      <img slot="img" src="~/assets/imgs/archives.jpg" alt />
      <div class="title" slot="center">
        <h1>归档</h1>
      </div>
    </top-image>
    <div class="content">
      <section class="archives" v-for="(year,index) of Object.keys(archives)" :key="index">
        <h1>{{year}}</h1>
        <div class="item" v-for="item of archives[year]" :key="item.id">
          <span>{{item.time}}</span>
          <a :href="'/detail/'+item.id">{{item.title}}</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TopImage from "~/components/common/top-image";
import axios from "axios";

export default {
  asyncData() {
    return axios.get("http://localhost:3000/api/archives").then(res => {
      if (res.data.status == 0) {
        return { archives: res.data.data };
      }
    });
  },
  data() {
    return {};
  },
  components: {
    TopImage
  }
};
</script>


<style lang="scss" scoped>
.container {
  .content {
    .archives {
      max-width: 760px;
      width: 100%;
      padding: 20px;
      h1 {
        margin-left: -20px;
      }
      .item {
        position: relative;
        border-left: 1px dashed #ccc;
        font-size: 16px;
        padding: 10px 20px;
        >a{
          color: #777;
        }
        >a:hover{
          color: #64B5F6;
        }
        &:before {
          content: "";
          width: 6px;
          height: 6px;
          background-color: currentColor;
          border-radius: 5px;
          position: absolute;
          top: 0;
          bottom: 0;
          left: -3px;
          margin: auto;
        }
      }
    }
  }
}
</style>