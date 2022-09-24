import { h } from "../../dist/tiny-vue3.esm.js";

export const Foo = {
  setup(props) {
    // props count
    // shallow readonly
    props.count++;
    console.log(props);
  },

  render() {
    return h("div", {}, "foo: " + this.count);
  },
};
