import Vue from 'vue'

import {encapsulate} from './roEncapClassObj'

// This class/members should not be static to accomodate the need
// for multiple separate shared states (although, multiple instances of
// reactive shared states are not recommended).
// Reactive state is for data to be used for dynamic component rendering.
// Static state is simple shared storage, non reactive.
class Container {
  constructor () {
    // We use Vue's own interface for reactive store for consistency
    // And concise code
    const storeVM = new Vue({
      data: {
        reactiveState: {}
      }
    })
    this.data = storeVM.$data
    this.$reactiveState = storeVM.$data.reactiveState
    this.$staticState = {}
  }

  getReactive (key) {
    return this.$reactiveState[key]
  }
  getStatic (key) {
    return this.$staticState[key]
  }

  setReactive (key, val) {
    Vue.set(this.$reactiveState, key, val)
  }
  setStatic (key, val) {
    Object.assign(this.$staticState, {[key]: val})
  }
}

export default encapsulate(Container)
