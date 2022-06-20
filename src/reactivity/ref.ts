import { reactive } from "./reactive";
import { isTracking, trackEffects, triggerEffects } from "./effect";
import { hasChanged, isObject } from "../shared";

class RefImpl {
  private _value;
  private dep;
  private _rawValue: any;
  public readonly __v_isRef = true;
  constructor(value, public readonly __v_isShallow) {
    this._value = __v_isShallow ? value : convert(value);
    this._rawValue = value;
    this.dep = new Set();
  }

  get value() {
    trackRefValue(this);
    return this._value;
  }

  set value(newValue) {
    if (hasChanged(this._rawValue, newValue)) {
      this._value = this.__v_isShallow ? newValue : convert(newValue);
      this._rawValue = newValue;
      triggerEffects(this.dep);
    }
  }
}

function createRef(rawValue: unknown, shallow:boolean) {
  if (isRef(rawValue)) {
    return rawValue
  }
  return new RefImpl(rawValue, shallow);
}

export function ref(value) {
  return createRef(value, false);
}

export function shallowRef(value) {
  return createRef(value, true);
}

function convert(value) {
  return isObject(value) ? reactive(value) : value;
}

function trackRefValue(ref) {
  if (isTracking()) {
    trackEffects(ref.dep);
  }
}

export function isRef(ref) {
  return !!ref.__v_isRef;
}

export function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

export function proxyRefs(objectWithRefs) {
  return new Proxy(objectWithRefs, {
    get(target, key) {
      return unref(Reflect.get(target, key));
    },
    set(target, key, value) {
      if (isRef(target[key]) && !isRef(value)) {
        return (target[key].value = value);
      } else {
        return Reflect.set(target, key, value);
      }
    },
  });
}
