<template>
  <transition name="el-fade-in" mode="out-in">
    <div class="wrapper">
      <Header title="主页" isHome type="reverse" />
      <div class="main">
        <Banner />
        <NavTab />
        <transition name="el-fade-in" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
      <Footer />
    </div>
  </transition>
</template>

<script>
import Header from 'components/header'
import Footer from 'components/footer'
import Banner from './components/Banner'
import NavTab from './components/NavTab'
export default {
  data () {
    return {
    }
  },
  name: 'home',
  components: { Header, Footer, Banner, NavTab },
  created () { console.log(this.$route) },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 3.7rem;
  padding-bottom: 4.3rem;
  min-height: 100vh;
  background: #ebf6fc;
}
</style>
