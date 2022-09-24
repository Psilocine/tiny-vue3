<h1 align="center">tiny vue3</h1>

<br>

**English** | [中文](./README.zh-CN.md)

<br>

### Overview

Tiny version of the Vue3 based on TDD, in order to learning deeply Vue3 and clarify the core logic 

### Feature

**reactivity**

- [x] implement reactive
- [x] effect.scheduler
- [x] effect.stop
- [x] track dependency collection
- [x] trigger triggering dependencies
- [x] implement readonly
- [x] isReactive
- [x] isReadonly
- [x] nested reactive
- [x] shallowReadonly
- [x] shallowReactive
- [x] isProxy
- [x] implement ref
- [x] shallowRef
- [x] proxyRefs
- [x] implement computed

**runtime-core**

- [x] component type
- [x] element type
- [x] props
- [x] props 和 context
- [x] component emit
- [x] proxy
- [x] setup
- [x] nextTick
- [x] getCurrentInstance
- [x] provide/inject
- [x] slots
- [x] Fragment node component
- [x] Text node component
- [x] $el

**compiler-core**

- [x] parse slots
- [x] parse element
- [x] parse text

**runtime-dom**

- [x] custom renderer

**monorepo & vitest**

- [x] refactor by pnpm monorepo
- [x] vitest replace jest

### License

Tiny-vue3 is [MIT licensed](./LICENSE).
