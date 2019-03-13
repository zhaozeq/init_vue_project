<template>
  <div class="wrapper">
    <span class="dot" :class="{isPlay}" v-for="(item,index) in arr" :key="index" :style="getDotStyle(index)">
    </span>
    <div class="play">
      <el-button type="primary" icon="el-icon-check" @click="changePlay">
        {{isPlay?'播放中':'暂停中...'}}
      </el-button>
    </div>
    <div class="note">
      总剩余时间：{{minute}}分钟
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data () {
    return {
      minute: 50,
      isPlay: true,
      arr: Array(60)
    }
  },
  methods: {
    getDotStyle (i) {
      return {
        'animationDelay': `${1 / 20 * i}s`,
        'transform': `translateX(-4000%) rotate(${6 * i}deg)`
      }
    },
    changePlay () {
      this.isPlay = !this.isPlay
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  padding-top: 3.6rem;
  background: linear-gradient(rgb(56, 197, 167), rgb(56, 197, 136));
  .dot {
    position: absolute;
    top: 13.6rem;
    left: 50%;
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 50%;
    // box-shadow: 0 0 0 0.3px #fff;
    transform-origin: 4000% 50%;
  }
  .isPlay {
    animation: load 3s ease infinite;
  }
  .play {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20rem;
    width: 100%;
  }
  .note {
    padding: 1rem;
    text-align: center;
    color: #fff;
  }
}
@keyframes load {
  0% {
    opacity: 1;
  }
  3% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
