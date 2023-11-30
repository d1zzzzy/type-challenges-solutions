/*
  18 - 获取元组长度
  -------
  by sinoon (@sinoon) #简单 #tuple

  ### 题目

  创建一个`Length`泛型，这个泛型接受一个只读的元组，返回这个元组的长度。

  例如：

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla> // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```

  > 在 Github 上查看：https://tsch.js.org/18/zh-CN
*/

/* _____________ 你的代码 _____________ */

/**
 * 首先传进来的是数组 T extends string[]
 * 其次是类型数组 readonly string[]
 * 然后通过 ['length']访问
 */
type Length<T extends readonly string[]> = T['length']

/* _____________ 测试用例 _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'
//
const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const
//
// type cases = [
//   Expect<Equal<Length<typeof tesla>, 4>>,
//   Expect<Equal<Length<typeof spaceX>, 5>>,
//   // @ts-expect-error
//   Length<5>,
//   // @ts-expect-error
//   Length<'hello world'>,
// ]

type teslaLength = Length<typeof tesla>
type spaceXLength = Length<typeof spaceX>
