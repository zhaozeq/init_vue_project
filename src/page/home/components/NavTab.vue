<template>
  <div class="wrapper">
    <router-link to="/home/home" class="tabItem" active-class='active'>
      首页
    </router-link>
    <router-link to="/home/test" class="tabItem" active-class='active'>
      测试
    </router-link>
    <router-link to="/home/main" class="tabItem" active-class='active'>
      组件
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.6rem;
  .tabItem {
    flex: 1;
    display: block;
    text-align: center;
    text-decoration: none;
    color: #999;
    background: #fff;
  }
  .active {
    color: #ff0000;
  }
}
</style>
