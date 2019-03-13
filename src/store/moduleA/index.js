const moduleA = {
  namespaced: true,
  state: {
    a: 1
  },
  actions: {},
  mutations: {
    add (state, { val, val1 }) {
      console.log(val)
      console.log(val1)
      state.a += val
    }
  }
}

export default moduleA
