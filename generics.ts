// 泛型：
// 泛型是指在定义函数、接口和类的时候不预先指定具体的类型，而是在使用的时候再指定类型的一种特性

function createArr<T>(length: number,value: T): Array<T>{
  let result: T[] = [];
  for(let i=0;i<length;i++){
    result[i] = value;
  }
  return result;
}
createArr<string>(3,'x')