<template>
  <div class="content">
    <slot></slot>
    <customFooter></customFooter>
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
  max-width: 800px;
  min-height: calc(100vh - 65px);
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding-bottom: 100px;
  position: relative;
}
</style>