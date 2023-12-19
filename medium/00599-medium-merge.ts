/*
  599 - Merge
  -------
  by ZYSzys (@ZYSzys) #medium #object

  ### Question

  Merge two types into a new type. Keys of the second type overrides keys of the first type.

  For example

  ```ts
  type foo = {
    name: string
    age: string
  }
  type coo = {
    age: number
    sex: string
  }

  type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}
  ```

  > View on GitHub: https://tsch.js.org/599
*/

/* _____________ Your Code Here _____________ */

/**
 * F 和 S 是要合并的两个对象类型。
 * 使用映射类型 P in keyof F | keyof S 遍历 F 和 S 的所有键。
 * 对于每个键 P，检查它是否存在于 S 中。如果是，类型为 S[P]；如果不存在于 S 但存在于 F 中，类型为 F[P]。
 */
type Merge<F, S> = {
  [K in keyof F | keyof S] : K extends keyof S
    ? S[K]
    : K extends keyof F
      ? F[K]
      : never;
}

/* _____________ Test Cases _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'
//
type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

// type cases = [
//   Expect<Equal<Merge<Foo, Bar>, {
//     a: number
//     b: number
//     c: boolean
//   }>>,
// ]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/599/answer
  > View solutions: https://tsch.js.org/599/solutions
  > More Challenges: https://tsch.js.org
*/
