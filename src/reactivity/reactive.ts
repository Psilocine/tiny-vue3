import { mutableHandlers, readonlyHandlers } from "./baseHandler";

export function reactive(raw) {
  return createReactiveObject(raw, mutableHandlers);
}

export function readonly(raw) {
  return createReactiveObject(raw, readonlyHandlers);
}

function createReactiveObject(target, baseHandlers) {
  return new Proxy(target, baseHandlers);
}
