"use strict";
// 内置对象
// 1.ECMAScript 标准提供的内置对象:
var b = new Boolean(1);
var e = new Error('Error');
var d = new Date();
var r = /[0-9]/;
// 2.DOM 和 BOM 的内置对象
var body = document.body;
var allDiv = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
    //....
});
// 用 TypeScript 写 Node.js
// Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
// npm install @types/node --save-dev
