export default {
  increment ({ commit }) {
    commit('increment')
  },
  async1 () {
    return new Promise(resolve => {
      mockRequestData(val => {
        resolve(val + 4)
      })
    })
  },
  async2 () {
    return new Promise(resolve => {
      mockRequestData(val => {
        resolve(val + 2)
      })
    })
  },
  multiple ({ commit }, payload) {
    setTimeout(() => {
      commit('multiple', payload)
      console.log('yi步完成')
    }, 2000)
  },
  mockRequest ({ commit }) {
    mockRequestData(val => {
      commit('mockRequest', { val })
    })
  },
  async asyncTest ({ commit, dispatch }) {
    console.log('同步方法开始执行')
    const async1val = await dispatch('async1')
    console.log('async1执行结束，async2开始执行')
    const async2val = await dispatch('async2')
    const val = async1val + async2val
    console.log('所有异步请求结束', val)
    commit('mockRequest', { val })
  }
}

// 异步方法
const mockRequestData = cb => {
  setTimeout(() => {
    const val = 10
    cb && cb(val)
  }, 1000)
}
