/*
  191 - Append Argument
  -------
  by Maciej Sikora (@maciejsikora) #medium #arguments

  ### Question

  For given function type `Fn`, and any type `A` (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take `Fn` as the first argument, `A` as the second, and will produce function type `G` which will be the same as `Fn` but with appended argument `A` as a last one.

  For example,

  ```typescript
  type Fn = (a: number, b: string) => number

  type Result = AppendArgument<Fn, boolean>
  // expected be (a: number, b: string, x: boolean) => number
  ```

  > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c) by [@maciejsikora](https://github.com/maciejsikora)

  > View on GitHub: https://tsch.js.org/191
*/

/* _____________ Your Code Here _____________ */
/**
 * Func extends (...args: infer Args) => infer ReturnType：这里使用条件类型和 infer 关键字来推断原函数的参数类型（Args）和返回类型（ReturnType）。
 *
 * (...args: [...Args, A]) => ReturnType：在这个类型中，我们创建了一个新的函数类型，它的参数是原始参数（Args）加上新追加的参数（A），并保持相同的返回类型（ReturnType）。
 *
 * never：如果传入的 Func 不是函数类型，结果类型将是 never。
 */
type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer ReturnType
  ? (...args: [...Args, A]) => ReturnType
  : never;

/* _____________ Test Cases _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

// type cases = [
//   Expect<Equal<Case1, Result1>>,
//   Expect<Equal<Case2, Result2>>,
//   // @ts-expect-error
//   AppendArgument<unknown, undefined>,
// ]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/191/answer
  > View solutions: https://tsch.js.org/191/solutions
  > More Challenges: https://tsch.js.org
*/
