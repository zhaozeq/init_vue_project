export default {
  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation, 只能同步
  increment (state) {
    state.count++
  },
  multiple (state, payload) {
    const { n = 2 } = payload
    state.count *= n
  },
  mockRequest (state, payload) {
    const { val = 0 } = payload
    state.count += val
  }
}
