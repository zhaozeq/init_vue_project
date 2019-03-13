<template>
  <div class="wrapper">
    <header class='header' :class="type">
      <i v-if="!isHome" class="el-icon-arrow-left goback" @click="goback"></i>
      <div class="title ellipsis">
        {{title}}
      </div>
      <i v-show="isMore" class="el-icon-more more" @click="showMore"></i>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    type: {
      type: String,
      default: 'headerDefault'
    },
    isMore: {
      type: Boolean,
      default: false
    },
    isHome: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    showMore () {
      console.log('展示更多。。。')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/theme/variable.scss";
$headerH: 3.6rem;
.wrapper {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
}
.headerDefault {
  background: #fff;
  .goback {
    color: $--color-primary;
  }
}
.reverse,
.reverse_transparent {
  color: #fff;
  .goback {
    color: #fff;
  }
}
.reverse {
  background: $--color-primary;
}
.reverse_transparent {
  background: transparent;
}
.header {
  position: relative;
  display: flex;
  height: $headerH;
  line-height: $headerH;
  font-size: 1.6rem;
  .goback,
  .more {
    position: absolute;
    top: 0;
    width: $headerH;
    line-height: $headerH;
    text-align: center;
  }
  .goback {
    left: 0;
  }
  .more {
    right: 0;
    color: #fff;
  }
  .title {
    flex: 1;
    padding: 0 $headerH;
    text-align: center;
  }
}
</style>
