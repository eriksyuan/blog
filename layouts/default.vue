<template>
  <div>
    <default-header></default-header>
    <goto-top />
    <div style="height:65px"></div>
    <content-box>
      <nuxt />
    </content-box>
  </div>
</template>


<script>
import DefaultHeader from "~/components/default-header.vue";
import GotoTop from "~/components/common/goto-top.vue";
import globalFooter from "~/components/footer.vue";
import contentBox from "~/components/content-box";
export default {
  data() {
    return {};
  },
  components: {
    DefaultHeader,
    GotoTop,
    globalFooter,
    contentBox
  }
};
</script>
<style>
</style>
