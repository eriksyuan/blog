<template>
  <div class="v-empty-view" :style="style"></div>
</template>


<script>
export default {
  computed:{
    style(){
      return {
        height:this.height+'rem'
      }
    }
  },
  props: {
    height: {
      type: String,
      default: "2"
    }
  }
};
</script>


<style lang="scss">
.v-empty-view {
  width: 100%;
}
</style>