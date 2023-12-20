/*
  949 - AnyOf
  -------
  by null (@kynefuk) #medium #array

  ### Question

  Implement Python liked `any` function in the type system. A type takes the Array and returns `true` if any element of the Array is true. If the Array is empty, return `false`.

  For example:

  ```ts
  type Sample1 = AnyOf<[1, "", false, [], {}]> // expected to be true.
  type Sample2 = AnyOf<[0, "", false, [], {}]> // expected to be false.
  ```

  > View on GitHub: https://tsch.js.org/949
*/

/* _____________ Your Code Here _____________ */

/**
 * Falsy 类型定义：定义了一系列 TypeScript 中认为假值（falsy）的类型，包括 false, 0, '', 空数组 [], 空对象 { [key: string]: never }, null, 和 undefined。
 *
 * AnyOf<T extends readonly any[]>：AnyOf 接受一个数组类型 T 作为参数。
 *
 * T extends [infer First, ...infer Rest]：使用条件类型和 infer 关键字将数组 T 分解为第一个元素 First 和剩余部分 Rest。
 *
 * First extends Falsy ? AnyOf<Rest> : true：检查 First 是否为假值。如果是，递归地应用 AnyOf 到剩余的元素 Rest。如果不是，返回 true。
 *
 * false：如果数组为空（即所有元素都已递归检查完），返回 false。
 */
type Falsy = false | 0 | -0 | "" | null | [] | undefined | { [key: string]: never };

type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? F extends Falsy ? AnyOf<R> : true
  : false;

/* _____________ Test Cases _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'

// type cases = [
//   Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
//   Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
//   Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
//   Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
//   Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
//   Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
//   Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
//   Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
//   Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
//   Expect<Equal<AnyOf<[]>, false>>,
// ]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/949/answer
  > View solutions: https://tsch.js.org/949/solutions
  > More Challenges: https://tsch.js.org
*/
