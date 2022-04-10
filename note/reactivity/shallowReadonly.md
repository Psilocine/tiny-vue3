# shallowReactive


## 流程
![flow](./assets/shallowReactive_flow.png)

shallowReactive 和 shallowReadonly 的子对象不会转换为响应式，适用于只会变化外层属性的场景，可以减少多次 Proxy，减少性能开销