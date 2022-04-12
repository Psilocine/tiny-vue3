import { h } from "../../lib/mini-vue.esm.js";

export const App = {
  render(){
    // ui
    return h('div', 'hi, mini-vue')
  },
  setup() {

    return {
      msg: 'mini-vue'
    }
  }
}