<template>
  <div class="content">
    <div class="main">
      <slot name="main"></slot>
      
    </div>
    <div class="sticky">
      <slot name="sticky"></slot>
    </div>
  </div>
</template>


<script>
export default {
  
};
</script>


<style lang="scss" scoped>
.content {
  max-width: 1000px;
  min-height: calc(100vh - 65px);
  margin: 0 auto;
  position: relative;
  .main {
    width: 760px;
    background-color: rgba(255, 255, 255, 0.8);
    padding-bottom: 20px;
  }
  .sticky{
    position: absolute;
    left: 760px;
    top: 0;
  }
}
@media screen and (max-width: 1020px ){
  .content{
    .main{
      width: 100%
    }
    .sticky{
      display: none;
    }
  }
}
</style>