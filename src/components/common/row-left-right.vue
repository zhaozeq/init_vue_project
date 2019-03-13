<!--
  一个简单的左右结构组件
  props:
    content (String)  : 左边内容
    type (String)   : 右边显示  按钮 还是 更多  'btn' || 'more' 默认 'btn'
    default : true || false 默认值（type==='btn'）
    isSet (Boolean) : 是否进行设置 默认true
  父组件(parent) : v-on: clickEvent
-->
<template>
  <div class="simple-left-right">
    <div class="blocker switch">
      <div>{{content}}</div>
      <el-switch
        v-if="type==='btn'"
        :value="value"
        @change="_switchChange"
      ></el-switch>
      <div
        v-if="type==='more'"
        @click="_switchChange"
      >
        <span
          class="unset"
          v-show="!isSet"
        >未设置</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'row-left-right',
  props: {
    content: String,
    type: {
      type: String,
      default: 'btn'
    },
    value: {
      type: Boolean,
      default: true
    },
    isSet: {
      type: Boolean,
      default: true
    }
  },
  methods: { // 方法
    _switchChange (val) {
      this.$emit('clickEvent', val)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/theme/variable.scss";
.simple-left-right {
  text-align: center;
  .blocker {
    padding: 1.2rem;
    text-align: left;
    background: #ffffff;
    .unset {
      color: $--color-primary;
    }
  }
  .switch {
    display: flex;
    justify-content: space-between;
  }
  .gearSet {
    padding-bottom: 1rem;
  }
}
</style>
