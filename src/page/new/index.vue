<template>
  <div>
    <Header title="自定义功能一" />
    <div class="cus">
      <CustomFun />
    </div>
  </div>
</template>

<script>
import Header from 'components/header'
import CustomFun from 'components/common/custom_function'
export default {
  name: 'test',
  components: { Header, CustomFun }
}
</script>
<style scoped  lang="scss" type="text/css">
.cus {
  padding-top: 3.7rem;
}
</style>
