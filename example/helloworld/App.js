import { h } from "../../lib/tiny-vue3.esm.js";
import { Foo } from "./Foo.js";

window.self = null;
export const App = {
  render() {
    window.self = this;
    // ui
    return h(
      "div",
      {
        id: "root",
        class: ["red", "hard"],
        onClick() {
          console.log("click");
        },
      },
      // setupState
      // this.$el
      [
        h("div", {}, "hi, " + this.msg),
        h(Foo, {
          count: 1,
        }),
      ]
      // string
      // "hi, tiny-vue3"
      // Array
      // [h("p", { class: "red" }, "hi"), h("p", { class: "blue" }, "tiny-vue3")]
    );
  },
  setup() {
    return {
      msg: "tiny-vue3-haha22",
    };
  },
};
