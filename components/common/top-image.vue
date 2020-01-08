<template>
  <header class="top">
    <div class="image" :style="'background-image:url('+image+')'"></div>
    <div class="article-title">
      <slot name="bottom">
      </slot>
    </div>
    <div class="center">
      <slot name="center">
      </slot>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.top {
  position: relative;
  width: 100%;
  min-height: 400px;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .image {
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .article-title {
    padding: 20px;
    position: absolute;
    bottom: 0;
    color: #fff;
    
  }
  .center{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>