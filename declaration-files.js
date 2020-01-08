"use strict";
/*
  declare var 声明全局变量
  declare function 声明全局方法
  declare class 声明全局类
  declare enum 声明全局枚举类型
  declare namespace 声明（含有子属性的）全局对象
  interface 和 type 声明全局类型
  export 导出变量
  export namespace 导出（含有子属性的）对象
  export default ES6 默认导出
  export = commonjs 导出模块
  export as namespace UMD 库声明全局变量
  declare global 扩展全局变量
  declare module 扩展模块
  /// <reference /> 三斜线指令
*/
/*
  通常把声明语句放在一个单独的文件中，这就是声明文件
  注意：声明文件必须以.d.ts为后缀

  //src/jQuery.d.ts
  declare var jQuery: (selector: string) => any;

  //src/index.ts
  jQuery('#foo');
*/
/*
 第三方声明文件
 更推荐的是使用 @types 统一管理第三方库的声明文件:
 npm install @types/jquery -D
*/
/**
 * 库的使用场景主要有以下几种:
 *全局变量：通过 <script> 标签引入第三方库，注入全局变量
  npm 包：通过 import foo from 'foo' 导入，符合 ES6 模块规范
  UMD 库：既可以通过 <script> 标签引入，又可以通过 import 导入
  直接扩展全局变量：通过 <script> 标签引入后，改变一个全局变量的结构
  在 npm 包或 UMD 库中扩展全局变量：引用 npm 包或 UMD 库后，改变一个全局变量的结构
  模块插件：通过 <script> 或 import 导入后，改变另一个模块的结构
 */
// 1.declare var/let/const
// 一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 const 而不是 var 或 let
// 注意: 声明语句中只能定义类型，切勿在声明语句中定义具体的实现
// declare const jQuery = function(selector) { //err
//   return document.querySelector(selector);
// };
// 2.declare function
// declare function jQuery(selector: string): any;
// 3.declare class
// declare class Person {
//   name: string;
//   constructor(name: string);
//   sayHi(): string;
// }
// 4.declare enum
// declare enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }
// 既可以通过 <script> 标签引入，又可以通过 import 导入的库，称为 UMD 库
