<template>
  <div class="content">
    <div class="main">
      <slot name="main"></slot>
      <customFooter></customFooter>
    </div>
    <div class="sticky">
      <slot name="sticky"></slot>
    </div>
  </div>
</template>


<script>
import customFooter from "~/components/footer";
export default {
  components: {
    customFooter
  }
};
</script>


<style lang="scss" scoped>
.content {
  max-width: 1140px;
  min-height: calc(100vh - 65px);
  margin: 0 auto;
  padding-bottom: 100px;
  position: relative;
  .main {
    max-width: 880px;
    background-color: rgba(255, 255, 255, 0.8);
    padding-bottom: 20px;
  }
  .sticky{
    position: absolute;
    left: 880px;
    top: 0;
  }
}
</style>