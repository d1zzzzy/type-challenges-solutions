/*
  296 - Permutation
  -------
  by Naoto Ikuno (@pandanoir) #中等 #union

  ### 题目

  实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。

  ```typescript
  type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
  ```

  > 在 Github 上查看：https://tsch.js.org/296/zh-CN
*/

/* _____________ 你的代码 _____________ */
/**
 * [T] extends [never] ? [] : 这个条件检查是否已经穷尽了所有的类型。如果 T 是 never（即没有更多的类型来进行排列），则结果是一个空数组。
 *
 * T extends T ? [T, ...Permutation<Exclude<K, T>>] : 这里使用条件类型对 T 进行迭代。对于 T 的每种可能的类型，将它加入到排列的前面，并递归地调用 Permutation，同时从 K 中排除当前的类型 T。这个递归过程会继续，直到 K 中没有更多的类型。
 *
 * Exclude<K, T> 用于创建一个类型，它排除了 T 中已经被用于排列的类型。
 *
 * never 是 TypeScript 中的一个特殊类型，表示永远不会发生的值的类型
 *
 * 为什么需要两个泛型参数?
 * 在 Permutation 类型中，K 作为一个独立的泛型参数是必要的，因为它允许我们在递归过程中保持对原始类型集合的引用。这是实现排列逻辑的关键：
 *
 * 在每次递归调用中，我们从 K 中排除当前处理的类型 T，以避免重复使用相同的元素。
 * 通过这种方式，我们可以确保在生成排列组合时，每个元素都恰好使用一次。
 */
type Permutation<T, K = T> =
  [T] extends [never]
    ? []
    : T extends T
      ? [T, ...Permutation<Exclude<K, T>>]
      : never;

/* _____________ 测试用例 _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'
//
// type cases = [
//   Expect<Equal<Permutation<'A'>, ['A']>>,
//   Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
//   Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
//   Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
//   Expect<Equal<Permutation<never>, []>>,
// ]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/296/answer/zh-CN
  > 查看解答：https://tsch.js.org/296/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
