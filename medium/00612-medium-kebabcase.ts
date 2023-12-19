/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal

  ### Question

  Replace the `camelCase` or `PascalCase` string with `kebab-case`.

  `FooBarBaz` -> `foo-bar-baz`

  For example

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">
  const foobarbaz: FooBarBaz = "foo-bar-baz"

  type DoNothing = KebabCase<"do-nothing">
  const doNothing: DoNothing = "do-nothing"
  ```

  > View on GitHub: https://tsch.js.org/612
*/

/* _____________ Your Code Here _____________ */

// 1. S extends ${infer First}${infer Rest}：使用条件类型和模板字面量类型将字符串 S 分解为第一个字符 First 和剩余部分 Rest。
//
// 2. Rest extends Uncapitalize<Rest>：检查 Rest 是否以小写字母开头。如果是，意味着没有新的单词开始，因此不需要添加短横线。
//
// 3. ${Lowercase<First>}${KebabCase<Rest>}：如果不需要添加短横线，则将 First 转换为小写，并递归地应用 KebabCase 到 Rest。
//
// 4. ${Lowercase<First>}-${KebabCase<Rest>}：如果 Rest 以大写字母开头，意味着一个新单词的开始，需要在 First 和 KebabCase<Rest> 之间添加短横线。

type KebabCase<S> = S extends `${infer First}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Lowercase<First>}${KebabCase<Rest>}`
    : `${Lowercase<First>}-${KebabCase<Rest>}`
  : S;

/* _____________ Test Cases _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'
//
// type cases = [
//   Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
//   Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
//   Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
//   Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
//   Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
//   Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
//   Expect<Equal<KebabCase<'-'>, '-'>>,
//   Expect<Equal<KebabCase<''>, ''>>,
//   Expect<Equal<KebabCase<'😎'>, '😎'>>,
// ]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/
