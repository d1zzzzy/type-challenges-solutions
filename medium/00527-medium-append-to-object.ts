/*
  527 - Append to object
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #object-keys

  ### Question

  Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

  For example

  ```ts
  type Test = { id: '1' }
  type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
  ```

  > View on GitHub: https://tsch.js.org/527
*/

/* _____________ Your Code Here _____________ */
// T：原始对象的类型。
// U extends string：新属性的键的类型。它被约束为 string 类型，因为对象的键必须是字符串。
// V：新属性的值的类型。
// [K in keyof T | U]：这是一个映射类型，它遍历原始对象 T 的键类型和新键 U。
// K extends keyof T ? T[K] : V：对于每个键 K，如果 K 是原始对象 T 的键，则使用原始类型 T[K]；如果 K 是新键 U，则使用新值的类型 V。
type AppendToObject<T, U extends string, V> = {
  [k in (keyof T) | U]: k extends keyof T
    ? T[k]
    : V
}
/* _____________ Test Cases _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'

type test1 = {
  key: 'cat'
  value: 'green'
}

type testExpect1 = {
  key: 'cat'
  value: 'green'
  home: boolean
}

type test2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

type testExpect2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  moon: false | undefined
}

// type cases = [
//   Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
//   Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
//   Expect<Equal<AppendToObject<test3, 'moon', false | undefined>, testExpect3>>,
// ]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/527/answer
  > View solutions: https://tsch.js.org/527/solutions
  > More Challenges: https://tsch.js.org
*/
