/*
  3 - Omit
  -------
  by Anthony Fu (@antfu) #medium #union #built-in

  ### Question

  Implement the built-in `Omit<T, K>` generic without using it.

  Constructs a type by picking all properties from `T` and then removing `K`

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
  ```

  > View on GitHub: https://tsch.js.org/3
*/

/* _____________ Your Code Here _____________ */
// 1. `T` 是我们要操作的原始类型。
// 2. `K` 是我们想要从 `T` 中移除的属性的集合。
// 3. `extends keyof any` 确保 `K` 是一个有效的键类型。
// 4. `[P in keyof T as P extends K ? never : P]` 是一个映射类型，它遍历 `T` 的所有键 `P`。
// 5. `P extends K ? never : P` 是一个条件类型，检查键 `P` 是否在集合 `K` 中。如果是，通过返回 `never` 排除它；如果不是，保持 `P`。
// 6. `T[P]` 获取原始类型 `T` 中 `P` 键的类型。
type MyOmit<T, K extends keyof any> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

/* _____________ Test Cases _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'
//
// type cases = [
//   Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
//   Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
// ]
//
// // @ts-expect-error
// type error = MyOmit<Todo, 'description' | 'invalid'>
//
// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }
//
// interface Expected1 {
//   title: string
//   completed: boolean
// }
//
// interface Expected2 {
//   title: string
// }
//
// /* _____________ Further Steps _____________ */
// /*
//   > Share your solutions: https://tsch.js.org/3/answer
//   > View solutions: https://tsch.js.org/3/solutions
//   > More Challenges: https://tsch.js.org
// */
