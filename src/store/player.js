import { proxy } from '../utils/LSProxy'
let state = {
  currentTime: 0,
  // 当前状态  0 空闲，1 playing, 2 pause
  state: 0,
  // 当前播放的模式 0顺序循环， 1单曲，2随机
  mode: 0
}
// state = proxy(state, 'player', ['mode'])

const mutations = {

  reset(state) {
    state.currentTime = 0
    state.state = 0
    state.mode = 0
  },
  /**
   * 播放的时间更新
   * @param {*} state 
   * @param {*} currentTime 播放了的时间
   */
  timeUpdate(state, currentTime) {
    state.currentTime = currentTime
  },
  /**
   * 更新播放器状态
   * @param {*} state 
   * @param {*} val  0顺序循环， 1单曲，2随机
   */
  setState(state, val) {
    state.state = val
  }
}

export default {
  namespaced: true,
  state,
  mutations
}