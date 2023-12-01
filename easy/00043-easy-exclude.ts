/*
  43 - 实现 Exclude
  -------
  by Zheeeng (@zheeeng) #简单 #built-in #union

  ### 题目

  实现内置的 `Exclude<T, U>` 类型，但不能直接使用它本身。

  > 从联合类型 `T` 中排除 `U` 中的类型，来构造一个新的类型。

  例如：

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > 在 Github 上查看：https://tsch.js.org/43/zh-CN
*/

/* _____________ 你的代码 _____________ */

/**
 * 区别于 js, ts 类型判断没有 in 或者其他的方法, 只能通过 extends 来判断
 * never 可以看当做 js 中的 null/undefined
 */
type MyExclude<T, U> = T extends U ? never : T;

/* _____________ 测试用例 _____________ */
// import type { Equal, Expect } from "@type-challenges/utils";

// type cases = [
//   Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
//   Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
//   Expect<
//     Equal<MyExclude<string | number | (() => void), Function>, string | number>
//   >
// ];

type ExcludeA = MyExclude<"a" | "b" | "c", "a">

type A = 'a' | 'b' extends 'a' ? never : 'b';