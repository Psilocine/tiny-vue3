### Goal

基于 TDD 实现 vue3 模型简易版本，用于深入学习 vue3，理清 vue3 的核心逻辑

`note` 目录下为学习笔记，用于加深各个环节 keypoint 的印象

### Tasking

#### runtime-core

- [ ] 支持组件类型
- [ ] 支持 element 类型
- [ ] 初始化 props
- [ ] setup 可获取 props 和 context
- [ ] 支持 component emit
- [ ] 支持 proxy
- [ ] 可以在 render 函数中获取 setup 返回的对象
- [ ] nextTick 的实现
- [ ] 支持 getCurrentInstance
- [ ] 支持 provide/inject
- [ ] 支持最基础的 slots
- [ ] 支持 Text 类型节点
- [ ] 支持 $el api

#### reactivity

目标是用自己的 reactivity 支持现有的 demo 运行

- [x] reactive 的实现
- [ ] ref 的实现
- [x] readonly 的实现
- [ ] computed 的实现
- [x] track 依赖收集
- [x] trigger 触发依赖
- [x] 支持 isReactive
- [x] 支持嵌套 reactive
- [ ] 支持 toRaw
- [x] 支持 effect.scheduler
- [x] 支持 effect.stop
- [x] 支持 isReadonly
- [ ] 支持 isProxy
- [x] 支持 shallowReactive
- [x] 支持 shallowReadonly
- [ ] 支持 proxyRefs

### compiler-core

- [ ] 解析插值
- [ ] 解析 element
- [ ] 解析 text

### runtime-dom

- [ ] 支持 custom renderer
