import { isObject } from "../shared";
import {
  mutableHandlers,
  readonlyHandlers,
  shallowReactiveHandlers,
  shallowReadonlyHandlers,
} from "./baseHandlers";

export const enum ReactiveFlags {
  IS_REACTIVE = "__v_isReactive",
  IS_READONLY = "__v_isReadonly",
}

export function reactive(raw) {
  return createReactiveObject(raw, mutableHandlers);
}

export function shallowReactive(raw) {
  return createReactiveObject(raw, shallowReactiveHandlers);
}

export function readonly(raw) {
  return createReactiveObject(raw, readonlyHandlers);
}

export function shallowReadonly(raw) {
  return createReactiveObject(raw, shallowReadonlyHandlers);
}

function createReactiveObject(target, baseHandlerss) {
  return new Proxy(target, baseHandlerss);
}

export function isReactive(value) {
  return !!value[ReactiveFlags.IS_REACTIVE];
}

export function isReadonly(value) {
  return !!value[ReactiveFlags.IS_READONLY];
}

export function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

export const toReactive = (value) => {
  return isObject(value) ? reactive(value) : value;
};

export const toReadonly = (value) => {
  return isObject(value) ? readonly(value) : value;
};
