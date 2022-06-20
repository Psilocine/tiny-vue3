// 0000
// 0001 -> element
// 0010 -> stateful_component
// 0100 -> text_children
// 1000 -> array_children
export const enum ShapeFlags {
  ELEMENT = 1,
  STATEFUL_COMPONENT = 1 << 1,
  TEXT_CHILDREN = 1 << 2,
  ARRAY_CHILDREN = 1 << 3,
}
