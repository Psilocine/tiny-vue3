# computed

## 流程
!(流程)[./assets/computed_flow.png]

computed 计算属性的特征就是缓存，在 get value 的时候才去考虑是否需要更新值。
keypiont 是 ReactiveEffect 类传入 scheduler 函数代替 getter 函数执行，
```typescript
class ComputedRefImpl {
  ...
  private _effect: ReactiveEffect;
  constructor(getter) {
    this._effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
      }
    });
  }
  ...
}
```
在 getter 依赖的属性或值发生变化时，触发的是 scheduler 函数，标记 _dirty 为 true 则在下一轮 get value 的时候会重新计算 _value 的值