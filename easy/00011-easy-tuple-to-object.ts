/*
  11 - 元组转换为对象
  -------
  by sinoon (@sinoon) #简单 #object-keys

  ### 题目

  将一个元组类型转换为对象类型，这个对象类型的键/值和元组中的元素对应。

  例如：

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > 在 Github 上查看：https://tsch.js.org/11/zh-CN
*/

/* _____________ 你的代码 _____________ */

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  // 索引访问操作符 T[number]
  [k in T[number]]: k
}

/* _____________ 测试用例 _____________ */
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// const tupleNumber = [1, 2, 3, 4] as const
// const sym1 = Symbol(1)
// const sym2 = Symbol(2)
// const tupleSymbol = [sym1, sym2] as const
// const tupleMix = [1, '2', 3, '4', sym1] as const
//
// type tupleType = typeof tuple;
// type parseType = TupleToObject<typeof tuple>;
