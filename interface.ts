// 1.interface 接口
// interface Person{
//   name:string;
//   age: number;
// }
// let tom: Person = { 
//   name: 'tom',
//   age: 22,
// }

// 2.可选属性 
// interface Person2{
//   name: string;
//   age?: number;
// }
// let lili: Person2 = {
//   name: 'lili'
// }

// 3.任意属性
// 注意：一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// interface Person3{
//   name: string;
//   age?: number;
//   [property: string]: number | string;
// }
// let Jerry: Person3 = {
//   name: 'Jerry',
//   age: 20,
//   score: 100
// }

// 4.只读属性
// 注意：只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
interface Person4{
  readonly id: string;
  name: string;
  age: number;
}
let shirley: Person4 = {
  id: '111',
  age: 22,
  name: 'shirley'
}
shirley.age = 24
// shirley.id = '102' //err