<template>
  <div class="header">
    <div class="contain">
      <div class="left-logo">
        <a href="/">
          <h1>ERIKSYOUNG</h1>
        </a>
      </div>
      <ul class="menu-box">
        <a-menu class="menu" mode="horizontal" :selectable="false" theme="light">
          <a-menu-item key="home">
            <a href="/">首页</a>
          </a-menu-item>
          <a-menu-item key="book">
            <a href="/archives">归档</a>
          </a-menu-item>
        </a-menu>
      </ul>
      
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: {},
  computed: {},

  methods: {},
  components: {}
};
</script>


<style lang="scss" scope>
.header {
  height: 65px;
  position: fixed;
  width: 100%;
  z-index: 11;
  background-color: #fff;
  box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.5);
  .contain {
    padding: 0 10px;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-box {
      margin: 0;
      .menu {
        background-color: transparent;
        border: none;
        line-height: 65px;
      }
    }
  }
}
</style>