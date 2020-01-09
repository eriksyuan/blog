<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      top: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.top = scrollTop;
      this.$emit("change", this.top);
    },
    toTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.top / 10);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.top + ispeed;
        if (that.top === 0) {
          clearInterval(timer);
        }
      }, 16);
    }
  }
};
</script>