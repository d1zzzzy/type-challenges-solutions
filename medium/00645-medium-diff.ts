/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #medium #object

  ### Question

  Get an `Object` that is the difference between `O` & `O1`

  > View on GitHub: https://tsch.js.org/645
*/

/* _____________ Your Code Here _____________ */

/**
 * Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>：使用 Exclude 工具类型从 T 中排除 U 的键，从 U 中排除 T 的键，然后对这些键进行联合。这样就得到了只存在于 T 或 U 中的键。
 *
 * P extends keyof T ? T[P] : P extends keyof U ? U[P] : never：对于每个键 P，检查它是否存在于 T 或 U 中，并提取相应类型。如果 P 既不在 T 也不在 U 中，理论上不会发生，但为了类型安全，返回 never。
 */
type Diff<O, O1> = {
  [K in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: K extends keyof O
    ? O[K]
    : K extends keyof O1
      ? O1[K]
      : never;
}

/* _____________ Test Cases _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

// type cases = [
//   Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
//   Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
//   Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
//   Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
// ]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/645/answer
  > View solutions: https://tsch.js.org/645/solutions
  > More Challenges: https://tsch.js.org
*/
