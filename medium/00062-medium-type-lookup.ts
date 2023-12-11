/*
  62 - Type Lookup
  -------
  by Anthony Fu (@antfu) #medium #union #map

  ### Question

  Sometimes, you may want to look up a type in a union by its attributes.

  In this challenge, we would like to get the corresponding type by searching for the common `type` field in the union `Cat | Dog`. In other words, we will expect to get `Dog` for `LookUp<Dog | Cat, 'dog'>` and `Cat` for `LookUp<Dog | Cat, 'cat'>` in the following example.

  ```ts
  interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
  }

  interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
  }

  type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
  ```

  > View on GitHub: https://tsch.js.org/62
*/

/* _____________ Your Code Here _____________ */

// 1. U extends { type: T } ? U : never：这是一个条件类型。对于联合类型 U 中的每个成员（由于类型分配，条件类型会被分配到联合类型的每个成员上），我们检查它是否具有形式 { type: T }
// 的结构。如果是，则条件类型解析为当前成员类型 U；如果不是，则解析为 never。
//
// 2. 由于 TypeScript 会自动分配条件类型到联合类型的每个成员上，我们的 LookUp 类型会有效地迭代 U 的每个成员，并仅选出具有匹配 type 属性的那些类型。
type LookUp<U, T extends string> = U extends { type: T } ? U : never

interface fakeA {
  type: 'dog',
  name: 'dog',
}

type e = fakeA extends { type: 'dog' } ? fakeA : never

/* _____________ Test Cases _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'
//
// interface Cat {
//   type: 'cat'
//   breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
// }
//
// interface Dog {
//   type: 'dog'
//   breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
//   color: 'brown' | 'white' | 'black'
// }
//
// type Animal = Cat | Dog
//
// type cases = [
//   Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
//   Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
// ]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/62/answer
  > View solutions: https://tsch.js.org/62/solutions
  > More Challenges: https://tsch.js.org
*/
