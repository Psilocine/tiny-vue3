import { h, getCurrentInstance } from "../../lib/tiny-vue3.esm.js";

export const Foo = {
  name: 'Foo',
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    console.log("Foo:", instance);
    return {};
  },

  render() {
    return h("div", {}, "foo");
  },
};
