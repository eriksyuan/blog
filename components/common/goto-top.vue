<template>
  <div>
    <scroll ref="scroll" @change="scroll"></scroll>
    <div class="DZLyl" @click="$refs.scroll.toTop()" :style="topLineStyle"></div>
  </div>
</template>


<script>
import scroll from "~/components/scroll";
export default {
  data() {
    return {
      topLineStyle: {
        top: "-100rem"
      },
      scrollTop: 0
    };
  },
  components: {
    scroll
  },
  methods: {
    scroll(e) {
      this.scrollTop = e;
      this.$emit("change", e);
      if (e >= 1000) {
        this.topLineStyle = {
          top: "-10rem"
        };
      } else {
        this.topLineStyle = {
          top: "-100rem"
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1020px) {
  .DZLyl {
    display: none;
  }
}
</style>