<template>
  <div v-if="listH3.length>0" class="directory">
    <p>目录</p>
    <ul>
      <li
        :class="`item ${item.active?'active':''} d1`"
        v-for="item in directory.filter(item=>item.tag=='h3')"
        :key="item.top"
      >
        <span @click="scrollTo(item.top)">{{item.title}}</span>
        <ul>
          <li
            :class="`item ${title.active?'active':''} d2`"
            v-for="title in item.children"
            :key="title.top"
          >
            <span @click="scrollTo(title.top)">{{title.title}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import scroll from "scroll";
import Page from "scroll-doc";
const page = Page();
export default {
  data() {
    return {
      navList: [],
      directory: [],
      listH3: [],
      listH4: []
    };
  },
  props: {
    top: {
      type: Number,
      default: 0
    }
  },
  watch: {
    top(newTop, oldTop) {
      let list = this.directory.filter(item => item.top < newTop + 30);
      if (list.length > 0) {
        let item = list.pop();
        this.directory.forEach(ele => {
          if (ele.active) {
            ele.active = false;
          }
          if (ele.top === item.top) {
            ele.active = true;
          }
        });
      }
    }
  },
  mounted() {
    this.getNavList();
  },
  methods: {
    getNavList() {
      let listH3 = this.getTag("h3");
      let listH4 = this.getTag("h4");

      listH3.forEach((ele, index) => {
        let children;
        if (index === listH3.length - 1) {
          children = listH4.filter(item => item.top > ele.top);
        } else {
          children = listH4.filter(
            item =>
              item.top > ele.top &&
              listH3[index + 1] &&
              item.top < listH3[index + 1].top
          );
        }
        ele.children = children;
      });
      this.listH3 = listH3;
      this.listH4 = listH4;
      this.directory = listH4.concat(listH3).sort(function(a, b) {
        return a.top - b.top;
      });
    },
    getTag(tag) {
      let arr = [];
      Array.from(document.querySelectorAll(tag), ele => {
        arr.push({
          top: ele.offsetTop,
          title: ele.innerText,
          active: false,
          tag: tag,
          children: []
        });
      });
      return arr;
    },
    scrollTo(top) {
      scroll.top(page, top - 20, { duration: 1 });
    }
  }
};
</script>

<style lang="scss" scoped>
.directory {
  position: fixed;
  width: 240px;
  background-color: #fff;
  padding: 10px 0;
  .item {
    span {
      position: relative;
      color: #909090;
      padding: 5px 10px;
      display: block;
      &:hover {
        cursor: pointer;
      }
    }
    &.d1 {
      > span {
        color: #000;
        font-weight: 600;
        margin: 6px 0;
        padding: 4px 0 4px 21px;
        &:before {
          left: 5px;
          margin-top: -3px;
          width: 6px;
          height: 6px;
        }
      }
    }
  }
  .item > span:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 20px;
    margin-top: -2px;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
  }
  .item.d2 > span {
    padding: 4px 0 4px 36px;
  }
  .item.active {
    > span {
      background-color: #ebedef;
      color: #007fff;
    }
  }
}
</style>