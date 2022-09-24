import { h } from "../../dist/tiny-vue3.esm.js";
import { Foo } from "./Foo.js";

window.self = null;
export const App = {
  name: "App",
  render() {
    // emit
    return h("div", {}, [
      h("div", {}, "App"),
      h(Foo, {
        // on + Event
        onAdd(a, b) {
          console.log("onAdd", a, b);
        },
        // add-foo
        onAddFoo(a, b) {
          console.log('onAdd', a, b);
        }
      }),
    ]);
  },
  setup() {
    return {};
  },
};
