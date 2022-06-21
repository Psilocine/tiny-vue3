import { h, renderSlots } from "../../lib/tiny-vue3.esm.js";

export const Foo = {
  setup(props, { emit }) {
    return {};
  },

  render() {
    const foo = h("p", {}, "foo");

    // Foo vnode children
    console.log(this.$slots);
    // child -> vnode
    // vnode

    // renderSlots
    // 1. 获取到要渲染的元素
    // 2. 获取到渲染的位置
    const age = 18;
    return h("div", {}, [
      renderSlots(this.$slots, "header", {
        age
      }),
      foo,
      renderSlots(this.$slots, "footer"),
    ]);
  },
};
