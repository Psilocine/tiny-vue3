<h1 align="center">tiny vue3</h1>

<br>

[English](./README.md) | **中文**

<br>

### 概述

基于 TDD 实现 vue3 模型简易版本，用于深入学习 vue3，理清 vue3 的核心逻辑

> `note` 目录下为学习笔记，用于加深各个环节的重点印象

### 功能实现

**reactivity**

- [x] reactive 的实现
- [x] 支持 effect.scheduler
- [x] 支持 effect.stop
- [x] track 依赖收集
- [x] trigger 触发依赖
- [x] readonly 的实现
- [x] 支持 isReactive
- [x] 支持 isReadonly
- [x] 支持嵌套 reactive
- [x] 支持 shallowReadonly
- [x] 支持 shallowReactive
- [x] 支持 isProxy
- [x] ref 的实现
- [x] 支持 shallowRef
- [x] 支持 proxyRefs
- [x] computed 的实现

**runtime-core**

- [x] 支持组件类型
- [x] 支持 element 类型
- [x] 初始化 props
- [x] setup 可获取 props 和 context
- [x] 支持 component emit
- [x] 支持 proxy
- [x] 可以在 render 函数中获取 setup 返回的对象
- [x] nextTick 的实现
- [x] 支持 getCurrentInstance
- [x] 支持 provide/inject
- [x] 支持最基础的 slots
- [x] 支持 Fragment 类型节点
- [x] 支持 Text 类型节点
- [x] 支持 $el api

**compiler-core**

- [x] 解析插值
- [x] 解析 element
- [x] 解析 text

**runtime-dom**

- [x] 支持 custom renderer

**monorepo & vitest**

- [x] pnpm monorepo 改造
- [x] vitest 替换 jest

### License

本项目基于 [MIT licensed](./LICENSE).