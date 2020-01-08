"use strict";
// 类型断言：类型断言（Type Assertion）可以用来手动指定一个值的类型
// 语法：<type>value 或 value as type
//在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种
// 当 TS 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
// 此时可以使用断言将something断言成string：
// function getLength(something: string | number): number {
//   if ((<string>something).length) {
//     return (<string>something).length;
//   } else {
//     return something.toString().length;
//   }
// }
// 注意：类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
// function toBoolean(something: string | number): boolean {  //err
//   return <boolean>something;
// }
