<template>
  <transition name="el-fade-in" mode="out-in">
    <div class="test">
      <div class="title">异步调用示例</div>
      <div class="btn">
        <el-button type="primary" @click="increment()">count自增</el-button>
      </div>
      <div class="btn">
        <el-button type="primary" @click="multiple({n:3})">active调用，异步倍增</el-button>
      </div>
      <div class="btn">
        <el-button type="primary" @click="mockRequest()">active调用，count异步加10</el-button>
      </div>
      <div class="btn">
        <el-button type="primary" @click="asyncTest()">active调用，同步方法示例</el-button>
      </div>
      <div class="btn">
        <el-button type="primary" @click="add({val:1, val1:2})">active模块调用方法示例</el-button>
      </div>
      <p>vuex count状态:{{count}}</p>
      <p>vuex 模块count状态:{{a}}</p>
      <Foot />
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Foot from './components/foot'
export default {
  name: 'test',
  data () { // 属性
    return {
    }
  },
  components: { Foot },
  computed: { // 计算属性
    ...mapState(['count']),
    ...mapState('moduleA', { a: state => state.a })
  },
  methods: { // 方法
    ...mapActions([
      'increment',
      'multiple',
      'mockRequest',
      'asyncTest'
    ]),
    ...mapMutations('moduleA', ['add'])
  }
}
</script>
<style scoped  lang="scss" type="text/css">
.test {
  text-align: center;
  padding-bottom: 60px;
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding: 10px 0;
  }
  .btn {
    margin: 10px;
  }
}
</style>
