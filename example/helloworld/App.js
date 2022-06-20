import { h } from "../../lib/tiny-vue3.esm.js";

export const App = {
  render() {
    // ui
    return h(
      "div",
      {
        id: "root",
        class: ["red", "hard"],
      },
      // setupState
      // this.$el
      "hi, " + this.msg
      // string
      // "hi, tiny-vue3"
      // Array
      // [h("p", { class: "red" }, "hi"), h("p", { class: "blue" }, "tiny-vue3")]
    );
  },
  setup() {
    return {
      msg: "tiny-vue3-haha",
    };
  },
};
