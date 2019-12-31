<template>
  <a-row type="flex" justify="space-around">
    <a-col v-if="last && last.title" :span="10">
      <a
        :href="'/detail/'+last._id"
        :style="'background-image:url('+last.image+')'"
        class="next hvr-sweep-to-right"
        v-if="last && last.title"
      >
        <div>
          <p>LAST POST</p>
          <P>{{last.title}}</P>
        </div>
      </a>
    </a-col>
    <a-col v-if="next && next.title" :span="10">
      <a
        :href="'/detail/'+next._id"
        :style="'background-image:url('+next.image+')'"
        class="next hvr-sweep-to-right"
        v-if="next && next.title"
      >
        <div>
          <p>NEXT POST</p>
          <P>{{next.title}}</P>
        </div>
      </a>
    </a-col>
  </a-row>
</template>

<script>
export default {
  props: {
    next: {
      type: Object,
      default() {
        return {};
      }
    },
    last: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.next {
  margin: 0 auto;
  display: block;
  height: 150px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  p {
    color: #aaa;
    font-weight: 600;
  }
  padding: 30px;
}
</style>