// 1.函数声明方式
// function sum(x: number, y: number): number {
//   return x + y;
// }
// sum(1,2,3) //err
// sum(1) //err
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
