// 1.函数声明方式
// function sum(x: number, y: number): number {
//   return x + y;
// }
// sum(1,2,3) //err
// sum(1) //err

// 2.函数表达式
// 注意：不用弄混淆TS中的=> 和 ES6中的 =>
// TS中的=> 表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// let sum1: (x: number,y: number) => number = function(x: number,y: number): number{
//   return x + y;
// }

// 3.接口方式
// interface Fun1{
//   (x: number,y: number): number;
// }
// let sum2: Fun1 = function(x: number,y: number): number{
//   return x + y;
// }

// 4.可选参数
// 注意：可选参数必须接在必需参数后面，可选参数后面不允许再出现必需参数了
// function computedName(firstName: string,lastName?: string){
//   return firstName + lastName
// }
// computedName('tom')

// 5.参数默认值
// TS会将添加了默认值的参数识别为可选参数
// function computedName2(firstName: string,lastName: string = 'cat'){
//   return firstName + lastName
// }
// computedName2('tom')

// 此时就不受【可选参数必须接在必需参数后面】的限制了
// function computedName3(firstName: string = 'tom',lastName: string){
//   return firstName + lastName
// }
// computedName3(undefined,'cat')

// 6.剩余参数:使用...rest的方式获取函数中剩余参数
// items是一个数组，可以用数组类型定义它
// 注意：rest 参数只能是最后一个参数
// function push(array: any[],...items: any[]){
//   items.forEach(item=>{
//     array.push(item)
//   })
// }
// let arr = []
// push(arr,1,2,3)

// 7.重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
// 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把被包含的定义写在前面。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}