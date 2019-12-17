// 字符串字面量类型：用来约束取值只能是某几个字符串中的一个
// 注意:类型别名与字符串字面量类型都是使用 type 进行定义
// type Name = 'click' | 'hover'
// function handle(ele: Element,event: Name){
//   // ...
// }
// handle(document.getElementById("name"),'click')
// handle(document.getElementById("name"),'dbclick')//err