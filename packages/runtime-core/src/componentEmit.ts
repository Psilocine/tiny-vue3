import { camelize, toHandlerKey } from "@tiny-vue3/shared";

export function emit(instance, event, ...args) {
  console.log("emit", event);

  // instance.props -> event
  const { props } = instance;

  // TPP
  // 先去写特定行为 -> 重构成通用行为
  // add
  const handlerName = toHandlerKey(camelize(event));
  const handler = props[handlerName];

  handler && handler(...args);
}
