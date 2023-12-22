/*
  2070 - Drop Char
  -------
  by CaptainOfPhB (@CaptainOfPhB) #medium #template-literal #infer

  ### Question

  Drop a specified char from a string.

  For example:

  ```ts
  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
  ```

  > View on GitHub: https://tsch.js.org/2070
*/

/* _____________ Your Code Here _____________ */

/**
 * S extends ${infer First}${C}${infer Rest} ?：使用条件类型和模板字面量类型分解字符串 S。如果 S 中存在字符 C，将 S 分解为出现 C 之前的部分 First、字符 C 本身、以及出现 C 之后的部分 Rest。
 *
 * DropChar<${First}${Rest}, C>：如果字符串 S 包含字符 C，递归地应用 DropChar 类型，将 First 和 Rest 部分重新组合并继续移除字符 C。
 *
 * : S：如果 S 不再包含字符 C，递归结束，返回结果字符串。
 */

type DropChar<S, C extends string> =
  S extends `${infer F}${C}${infer R}`
    ? DropChar<`${F}${R}`, C>
    : S;

/* _____________ Test Cases _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'

// type cases = [
//   // @ts-expect-error
//   Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
//   Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
//   Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
//   Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
//   Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
//   Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
//   Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
// ]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2070/answer
  > View solutions: https://tsch.js.org/2070/solutions
  > More Challenges: https://tsch.js.org
*/
