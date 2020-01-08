"use strict";
// 数组的类型
// 1.使用「类型 + 方括号」来表示数组
// 数组的项中不允许出现其他的类型
// let arr1: number[] = [1,2,34,5]
// let arr2: number[] = [1,2,3,'11'] //err
// arr1.push('11') //err
// 2.使用数组泛型来表示数组
// let arr3: Array<number> = [1,12,34]
// 3.使用接口来表示数组: 一般用它来表示类数组
// interface NumArr {
//   [index: number]: number;
// }
// let arr4: NumArr = [1,2,34,5]
// 4.类数组
// 注意:类数组不能用普通的数组方式来描述,而应该使用接口的方式来描述
// function sum(){
//   interface Arg{
//     [index: number]: number;
//     length: number;
//     callee: Function;
//   }
//   let args:Arg = arguments
// }
// 5.在数组中使用any, 表示数组中允许出现任意类型
var arr5 = [1, '22', true, { age: 20 }];
