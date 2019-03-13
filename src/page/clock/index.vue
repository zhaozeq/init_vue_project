<template>
  <div class="wrapper">
    <div class="header">
      <Header title="标准" type='reverse_transparent' />
    </div>
    <Clock />
    <RowLeftRight type='btn' content='童锁' :value="isChildAvailable" v-on:clickEvent="click" />
    <div class="stepBar">
      <el-steps direction="vertical" :active="0" :space="60">
        <el-step icon="el-icon-time" title="开始"></el-step>
        <el-step icon="el-icon-edit" title="工作中"></el-step>
        <el-step icon="el-icon-circle-check-outline" title="完成"></el-step>
      </el-steps>
    </div>
    <div class="fixFooter">
      <el-button plain type="primary" round size="mudium" @click="cancel">取消</el-button>
      <el-button type="primary" round size="mudium" @click="goOn">继续制作</el-button>
    </div>
  </div>
</template>

<script>
import Header from 'components/header'
import Clock from './components/Clock.vue'
import RowLeftRight from 'components/common/row-left-right'

export default {
  data () {
    return {
      isChildAvailable: false // 是否开启童锁
    }
  },
  components: { Header, Clock, RowLeftRight },
  methods: {
    click (val) {
      this.isChildAvailable = val
      console.log('ca', val)
    },
    cancel () {
      console.log('取消')
    },
    goOn () {
      console.log('继续')
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  .header {
    background: rgb(56, 197, 167);
  }
  .stepBar {
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 5rem;
    background: #fff;
  }
  .fixFooter {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    padding: 1rem;
    justify-content: space-around;
    width: 100%;
    z-index: 999;
    background: #fff;
  }
}
</style>
