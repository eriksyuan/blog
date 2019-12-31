<template> 
    <div class="header">
      <div class="contain">
        <div class="left-logo">
          <p>Eriksyuan.blog</p>
        </div>
        <ul class="menu-box">
          <a-menu class="menu" mode="horizontal" :selectable="false" theme="light">
            <a-menu-item key="home">
              <a href="/">
                <a-icon type="home" />首页
              </a>
            </a-menu-item>
            <!-- <a-menu-item key="book">
              <a-icon type="book" />文章
            </a-menu-item> -->
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
    max-width: 1140px;
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