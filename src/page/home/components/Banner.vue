<template>
  <div class="wrapper">
    <el-carousel height="9rem">
      <el-carousel-item v-for="item in 4" :key="item">
        <h1 style="text-align:center">{{ item }}</h1>
      </el-carousel-item>
    </el-carousel>
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
.wrapper {
  background: #666;
}
</style>
