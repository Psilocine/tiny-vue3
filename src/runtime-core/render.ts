import { createComponentInstance, setupComponent } from "./component";

export function render(vnode, container) {
  // patch

  patch(vnode, container);
}

function patch(vnode, container) {
  // 处理组件
  if (typeof vnode.type === 'string') {
    // processElement(vnode, container);
  } else if (Array.isArray(vnode.type)) {
    processComponent(vnode, container);
  }
}

function processComponent(vnode, container) {
  mountComponent(vnode, container);
}

function mountComponent(vnode: any, container) {
  const instance = createComponentInstance(vnode);

  setupComponent(instance);
  setupRenderEffect(instance, container);
}

function setupRenderEffect(instance: any, container) {
  const subTree = instance.render();

  // vnode -> patch
  // vnode -> element -> mountElement
  patch(subTree, container);
}
