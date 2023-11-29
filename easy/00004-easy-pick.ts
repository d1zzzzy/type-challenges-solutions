// 不使用 Pick<T, K> ，实现 TS 内置的 Pick<T, K> 的功能。
//
// 从类型 T 中选出符合 K 的属性，构造一个新的类型。
//
// 例如：

/**
 * interface Todo {
 *   title: string
 *   description: string
 *   completed: boolean
 * }
 *
 * type TodoPreview = MyPick<Todo, 'title' | 'completed'>
 *
 * const todo: TodoPreview = {
 *     title: 'Clean room',
 *     completed: false,
 * }
 */

// 知识点:
//   1. extends 继承了属性和方法，这里只有属性
//   2. keyof 索引类型查询操作符，keyof T 返回 T 上属性名的联合(union)
type MyPick<T, k extends keyof T> = {
  // 知识点:
  //  1. in 操作符，遍历联合类型
  [key in k]: T[key]
};

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

// MyPick<Todo, 'title'> // Expected1
// MyPick<Todo, 'title' | 'completed'> // Expected2
