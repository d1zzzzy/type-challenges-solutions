/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #中等 #template-literal

  ### 题目

  计算字符串的长度，类似于 `String#length` 。

  > 在 Github 上查看：https://tsch.js.org/298/zh-CN
*/

/* _____________ 你的代码 _____________ */

type LengthOfString<S extends string, T extends string[] = []> = S extends `${infer K}${infer U}`
  ? LengthOfString<U, [K, ...T]>
  : T['length']

/* _____________ 测试用例 _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'

// type cases = [
//   Expect<Equal<LengthOfString<''>, 0>>,
//   Expect<Equal<LengthOfString<'kumiko'>, 6>>,
//   Expect<Equal<LengthOfString<'reina'>, 5>>,
//   Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
// ]

type A = LengthOfString<''>;
type B = LengthOfString<'kumiko'>;
type C = LengthOfString<'reina'>;
type D = LengthOfString<'Sound! Euphonium'>;

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/298/answer/zh-CN
  > 查看解答：https://tsch.js.org/298/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
