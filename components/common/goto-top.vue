<template>
  <div>
    <div class="DZLyl" @click="toTop" :style="topLineStyle"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      topLineStyle: {
        top: "-100rem"
      },
      scrollTop: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  },
  methods: {
    toTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 10);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      this.scrollTop = scrollTop;
      this.$emit("change", scrollTop);
      if (scrollTop >= 1000) {
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
  .DZLyl{
    display: none;
  }
}
</style>