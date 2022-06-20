import { isReactive } from "../reactive";
import { shallowRef, isRef } from "../ref";
import { effect } from "../effect";

describe("shallowRef", () => {
  test("should not make non-reactive properties reactive", () => {
    let dummy: any;
    const props: any = shallowRef({ foo: 1 });

    effect(() => {
      dummy = props.value.foo || "can't find";
    });
    expect(isRef(props)).toBe(true);
    expect(isReactive(props.value)).toBe(false);
    expect(isReactive(props.value.foo)).toBe(false);

    props.value.foo = 2;
    expect(dummy).toBe(1);

    props.value = {};
    expect(dummy).toBe("can't find");
  });
});
