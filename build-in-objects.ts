// 内置对象
// 1.ECMAScript 标准提供的内置对象:
let b: Boolean = new Boolean(1)
let e: Error = new Error('Error')
let d: Date = new Date()
let r: RegExp = /[0-9]/

// 2.DOM 和 BOM 的内置对象
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click',function(e: MouseEvent){
  //....
})

// 用 TypeScript 写 Node.js
// Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
// npm install @types/node --save-dev