# scheduler

谈谈 constructor 参数里 scheduler 的修饰符，这节实现的逻辑如下
```typescript
class ReactiveEffect {
  private fn;

  constructor(_fn, public scheduler?) {
    this.fn = _fn;
  }
  ...
}
```

1. `?` 代表可选属性大家都很常见，补充另一个操作符 `!`，其代表非空断言，表示强制解析，使用后类型推断会排除 `null` 和 `undefined`
```typscript
function foo (maybeString: string | undefined | null) {
  const res: string = maybeString; // Error
  cosnt res2: string = maybeString!; // Ok
}
```

2. `public` 相当于创建了同名的成员变量，即
```typescript
class ReactiveEffect {
  private fn;
  public scheduler;

  constructor(_fn, scheduler?) {
    this.fn = _fn;
    this.scheduler = scheduler;
  }
  ...
}
```

以此类推，`private`、`readonly`、`protected` 也是可行的
```typescript
class ReactiveEffect {
  // private fn; // 可省略

  constructor(private fn, public scheduler?) {
    // this.fn = _fn; // 可省略
  }
  ...
}
```