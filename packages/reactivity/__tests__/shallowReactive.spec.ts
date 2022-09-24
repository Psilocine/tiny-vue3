import { isReactive, shallowReactive } from "../src/reactive";
import { effect } from '../src/effect'

describe("shallowReactive", () => {
  test("should not make non-reactive properties reactive", () => {
    let dummy;
    let dummy2;
    const props = shallowReactive({ foo: 1, nested: { bar: 1 } });

    effect(() => {
      dummy = props.foo;
      dummy2 = props.nested.bar;
    });
    expect(isReactive(props)).toBe(true);
    expect(isReactive(props.nested)).toBe(false);

    props.foo = 2;
    expect(dummy).toBe(2);

    props.nested.bar++;
    expect(dummy2).toBe(1);
  });
});
