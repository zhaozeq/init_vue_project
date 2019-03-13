<template>
  <div class="block">
    <div class="button-warp">
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      <el-button type="primary" @click="butClick">返回首页</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    butClick () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped >
.block {
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  z-index: 10;
  .button-warp {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
  }
}
</style>
