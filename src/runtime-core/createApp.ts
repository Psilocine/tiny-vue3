import { render } from "./render";
import { createVNode } from "./vnode";

export function createApp(rootComponent) {
  return {
    mount(rootContainer) {
      // 先 vode
      // 基于 vode 做处理

      const vnode = createVNode(rootComponent);

      render(vnode, rootContainer);
    },
  };
}
