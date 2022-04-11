# ref

## 流程
![flow](./assets/ref_flow.png)

ref 可以接受基本类型也可以接受引用类型。我们知道 Proxy 返回响应式对象的前提是需要参数是对象，基本类型如何监听呢？
所以 ref 才会以 `.value` 的形式来生成，在 get value 的时候收集依赖，在 set value 的时候触发依赖