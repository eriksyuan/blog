<template>
  <div class="footer">
    <a-row>
      <a-icon type="copyright" />
      <span>2020</span>
      <span>eriksyoung's blog</span>
    </a-row>
    <a-row>
      <a target="_blank" href="http://www.beian.miit.gov.cn/">浙ICP备20000511号-1</a>
    </a-row>
    <a-row>
      <a target="_blank" href="https://www.aliyun.com/">
        <img class="logo" src="~/assets/imgs/aliyun.png" alt="阿里云">
      </a>    
    </a-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: auto;
  .logo{
    height: 15px;
  }
  a{
    display: block;
  }
}
</style>