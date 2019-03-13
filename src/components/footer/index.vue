<template>
  <div class="wrapper">
    <footer class="footer">
      <router-link to="/" class="item">
        首页
      </router-link>
      <router-link to="/new" class="item">
        自定义功能一
      </router-link>
      <router-link to="/board_one" class="item">
        面板一
      </router-link>
      <router-link to="/clock" class="item">
        标准
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {},
  created () { },
  mounted () { },
  computed: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
@import "src/theme/variable.scss";
$footerH: 4.2rem;
.wrapper {
  position: fixed;
  z-index: 9999;
  left: 0;
  bottom: 0;
  width: 100%;
}
.footer {
  display: flex;
  justify-content: space-around;
  height: $footerH;
  line-height: $footerH;
  color: #fff;
  background-color: $--color-primary;
  .item {
    width: $footerH;
    text-align: center;
    text-decoration: none;
    color: #fff;
  }
}
</style>
