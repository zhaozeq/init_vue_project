<template>
  <div class="test">
    <div class="row">
      <RowLeftRight type='btn' content='开启防打扰' :value="isOpen" @clickEvent="clickEvent" />
    </div>
    <div class="blocker">
      <div class="gearSet">档位设置</div>
      <el-slider v-model="gear_set" show-stops :max="3" @change="gearChange" :format-tooltip="formatTooltip">
      </el-slider>
    </div>
    <div class="blocker">
      <div class="gearSet">设置二</div>
      <el-slider v-model="set2" show-stops :max="180" @change="set2Change">
      </el-slider>
    </div>
    <div class="row">
      <RowLeftRight type='more' content='更多功能' :isSet=true v-on:clickEvent="clickEvent1" />
    </div>
    <div class="row1">
      <RowLeftRight type='more' content='控制二' :isSet=false v-on:clickEvent="clickEvent1" />
    </div>
  </div>
</template>

<script>
import RowLeftRight from 'components/common/row-left-right'

export default {
  name: 'CustomFun',
  data () { // 属性
    return {
      switch_button: true,
      gear_set: 1,
      set2: 90,
      isOpen: true // 是否开启防打扰
    }
  },
  components: { RowLeftRight },
  methods: { // 方法
    clickEvent (val) {
      this.isOpen = val
      console.log(val)
      setTimeout(() => {
        this.$message({
          type: 'warn',
          message: '操作失败(异步测试)!'
        })
        this.isOpen = !this.isOpen
      }, 1000)
    },
    clickEvent1 () {
      console.log('点击更多')
    },
    gearChange (val) {
      console.log(val)
    },
    set2Change (val) {
      console.log(val)
    },
    formatTooltip (val) {
      let value = '抵挡'
      switch (val) {
        case 1:
          value = '自动'
          break
        case 2:
          value = '中档'
          break
        case 3:
          value = '高档'
          break
        default:
          break
      }
      return value
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/theme/variable.scss";
.test {
  text-align: center;
  .row {
    margin-top: 1rem;
  }
  .row1 {
    margin-top: 1px;
  }
  .blocker,
  .controller {
    margin-top: 1rem;
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
  .controller:last-child {
    margin-top: 1px;
  }
}
</style>
