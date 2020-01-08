// 枚举
// 一.常数项

// 0.枚举成员会被赋值为从0开始递增的数字，同时也会对枚举值到枚举名进行反向映射
// enum Hours {one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve}
// console.log(Hours['one'] === 0);
// console.log(Hours['eight'] === 7);
// console.log(Hours[1] === 'two');
// console.log(Hours[9] === 'ten');

// 1.枚举项可以手动赋值
// enum Hours {one = 1,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve}
// console.log(Hours['five'] === 5);

// 2.如果未手动赋值的枚举项和手动赋值的枚举项重复了 TS无法察觉到的

// 3.手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查，编译出来的js仍然是可用的
// enum Hours {one=1,two,three,four,five,six = <any>'s'}

// 4.手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
// enum Hours{one = -1,two,three = 3.3,four,five}
// console.log(Hours['one'] === -1);
// console.log(Hours['five'] === 5.3);

// 二.计算所得项
// 计算所得项后面不能跟未手动赋值的项，不然会因为无法获得初始值而报错
// enum Hours{one,two,three = 'three'.length}
// enum Hours{one,two,three = 'three'.length,four} //err 

// 三.常数枚举
// 假如包含了计算成员，则会在编译阶段报错
// const enum Hours{one,two,three}
// let hours = [Hours.one,Hours.two,Hours.three]

// 四.外部枚举；使用declare enum 定义的枚举类型,与声明语句一样常出现在声明文件中。
// 同时使用 declare 和 const 也是可以的
// declare enum Hours{
//   one,two,three
// }
// let hours = [Hours.one,Hours.two,Hours.three]