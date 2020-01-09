<template>
  <div class="layout">
    <default-header></default-header>
    <goto-top @change="getTop"></goto-top>
    <div style="height:65px"></div>
    <nuxt />
    <global-footer></global-footer>
  </div>
</template>


<script>
import DefaultHeader from "~/components/default-header.vue";
import gotoTop from "~/components/common/goto-top";
import globalFooter from "~/components/footer.vue";

export default {
  provide() {
    return {
      layout: this
    };
  },
  data() {
    return {
      top: 0
    };
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    getTop(top) {
      this.top = top;
    }
  },
  components: {
    DefaultHeader,
    globalFooter,
    gotoTop
  }
};
</script>
<style>
.layout {
  position: relative;
}
</style>
