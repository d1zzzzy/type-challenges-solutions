# Infer

`infer` 关键字在 TypeScript 中是一个非常强大的工具，用于在条件类型语句中进行类型推断。它主要用于在泛型和条件类型的上下文中“捕获”类型，而无需显式地定义这些类型。下面是 infer 关键字的一些主要作用和用法：

1. 类型推断： `infer` 允许你在条件类型内部声明一个类型变量，然后 TypeScript 会自动推断这个变量的类型。这在处理函数类型、元组类型、数组类型等复杂类型时特别有用。
2. 简化类型提取： 使用 `infer`，你可以在不知道确切类型的情况下提取函数的返回类型、参数类型，或者是元组和数组中的元素类型。这使得编写提取特定类型信息的通用类型别名变得更加简洁和直观。
3. 在条件类型中捕获类型： 当使用条件类型来判断一个类型是否符合某个模式时，`infer` 可以在这个模式匹配的过程中捕获某部分的类型。例如，可以用它来捕获函数返回的类型，或者是一个数组中元素的类型。
4. 泛型类型参数的动态推导： 在处理泛型类型时，`infer` 可以用来动态地推导出泛型类型参数的具体类型，而不需要手动指定。

## 在条件类型中捕获类型

```typescript
type FunctionArgs<T> = T extends (...args: infer A) => any ? A : never;

function sampleFunction(a: number, b: string, c: boolean) {
  // 函数实现
}

// 使用 FunctionArgs 来提取 sampleFunction 的参数类型
type SampleFunctionArgs = FunctionArgs<typeof sampleFunction>;
// SampleFunctionArgs 的类型将是 [number, string, boolean]
```

1. `FunctionArgs<T>` 是一个条件类型，检查 `T` 是否是一个函数。
2. 如果 `T` 是一个函数类型，`...args: infer A` 将会捕获这个函数的所有参数类型，并将这些类型存储在类型变量 `A` 中。
3. 如果 `T` 符合函数类型，那么 `FunctionArgs<T>` 就解析为 A，即这些参数的类型；如果不是，它解析为 `never`。
4. 因此，当我们使用 `FunctionArgs<typeof sampleFunction>` 时，我们实际上提取了 `sampleFunction` 的参数类型，得到一个包含这些参数类型的元组 `[number, string, 
boolean]`。这种方法非常有用，尤其是在需要处理函数类型并对它们的参数进行操作时。

## 泛型类型参数的动态推导

在 TypeScript 中使用 `infer` 关键字进行泛型类型参数的动态推导是一种强大的技术，它允许你在类型操作中自动推断出一些类型。以下是一个关于如何使用 `infer` 进行泛型类型参数动态推导的示例：

```typescript
type ElementType<T> = T extends (infer E)[] ? E : never;

// 使用 ElementType 提取数组元素的类型
type NumberArrayElement = ElementType<number[]>; // NumberArrayElement 类型为 number
type StringArrayElement = ElementType<string[]>; // StringArrayElement 类型为 string
```

1. `ElementType<T>` 是一个条件类型，检查 T 是否是一个数组类型。
2. 如果 `T` 是一个数组类型，`infer E` 将会捕获这个数组的元素类型，并将这个类型存储在类型变量 `E` 中。
3. 如果 `T` 符合数组类型，那么 `ElementType<T>` 就解析为 `E`，即数组元素的类型；如果不是，它解析为 `never`。
4. 通过这种方式，`ElementType<number[]>` 成为 `number`，因为它是从 `number[]` 类型的数组中推导出来的元素类型。同样，`ElementType<string[]>` 成为 
   `string`。这种方法非常实用，尤其是在需要处理泛型数组并对其元素进行某些类型操作时。
