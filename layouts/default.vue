<template>
  <div class="layout">
    <default-header></default-header>
    <div style="height:65px"></div>
    <nuxt />
    <global-footer></global-footer>
  </div>
</template>


<script>
import DefaultHeader from "~/components/default-header.vue";

import globalFooter from "~/components/footer.vue";

export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route);
  },
  components: {
    DefaultHeader,
    globalFooter
  }
};
</script>
<style>
.layout {
  position: relative;
}
</style>
