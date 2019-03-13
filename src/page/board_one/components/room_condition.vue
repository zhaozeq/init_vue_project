<template>
  <div class="wrapper">
    <div class="grid">
      <div>
        <span class="content">{{temperature}}</span>
        <span class="symbol">℃</span>
      </div>
      <div class="txt">室内温度</div>
    </div>
    <div class="grid">
      <div>
        <span class="content">{{humidity}}</span>
        <span class="symbol">%</span>
      </div>
      <div class="txt">室内湿度</div>
    </div>
    <div class="grid">
      <div>
        <span class="content">{{level}}</span>
      </div>
      <div class="txt">室尘等级 </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'room_condition',
  props: {
    temperature: {
      type: String,
      default: -1
    },
    humidity: {
      type: String,
      default: -1
    },
    level: {
      type: String,
      default: '优'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/theme/variable.scss";
.wrapper {
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-around;
  background: $--color-primary;
  color: #fff;
  .grid {
    flex: 1;
    text-align: center;
    .content {
      font-size: 3rem;
    }
    .symbol,
    .txt {
      font-size: 1rem;
    }
  }
}
</style>
