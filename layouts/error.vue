<template>
  <div class="errpage">
    <div class="exception">
      <svg-icon iconClass="#404"></svg-icon>
      <div>
        <h1>404</h1>
        <p>抱歉，你访问的页面不存在或仍在开发中</p>
        <a href="/">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main"
};
</script>

<style lang="scss" scoped>
.errpage {
  height: 100vh;
  background-color: #fff;
  .exception {
    height: 80%;
    min-height: 500px;
    display: flex;
    align-items: center;
    .svg-icon {
      width: 60%;
    }
    h1{
      font-size: 72px;
    }
    p{
      font-size: 24px;
      color: #767676;
    }
    a{
      line-height: 70px;
    }
  }
}
</style>