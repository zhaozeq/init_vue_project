<template>
  <div class="wrapper">
    <Header title="面板一" isMore type='reverse' />
    <div class="condition_wrapper">
      <RoomCondition temperature=10 humidity=10 level='优' />
    </div>
    <div class="model_wrapper">
      <router-link to="/board_one/model1" class="block" active-class='active'>
        <div>
          <i class="symbol">A</i>
          <div class="txt">模式一</div>
        </div>
      </router-link>
      <router-link to="/board_one/model2" class="block" active-class='active'>
        <div>
          <i class="symbol">A</i>
          <div class="txt">模式二</div>
        </div>
      </router-link>
      <router-link to="/board_one/model3" class="block" active-class='active'>
        <div>
          <i class="symbol">A</i>
          <div class="txt">模式三</div>
        </div>
      </router-link>
    </div>
    <transition name="el-fade-in" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from 'components/header'
import RoomCondition from './components/room_condition'
export default {
  components: { Header, RoomCondition }
}
</script>

<style lang="scss" scoped>
@import "src/theme/variable.scss";
.condition_wrapper {
  padding-top: 3.6rem;
}
.model_wrapper {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background: #fff;
  a.block {
    display: flex;
    flex: 1;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    align-items: center;
    text-align: center;
    text-decoration: none;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    .symbol {
      display: inline-block;
      width: 2rem;
      font-style: normal;
      font-size: 1.6rem;
      color: #aaa;
      border: 1px solid #aaa;
      border-radius: 50%;
    }
    .txt {
      padding-top: 0.5rem;
      font-size: 1.2rem;
      color: #666;
    }
  }
  a.active.block {
    color: #fff;
    background: $--color-primary;
    .symbol {
      color: #fff;
      border: 1px solid #fff;
    }
    .txt {
      color: #fff;
    }
  }
}
</style>
