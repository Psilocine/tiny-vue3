import { createVNode, Fragment } from "../vnode";

export function renderSlots(slots, name, props) {
  // vnode
  const slot = slots[name];

  if (slot) {
    console.log("slot", slot);
    if (typeof slot === 'function') {
      return createVNode(Fragment, {}, slot(props));
    }
  }
}