// 可以将JS 代码编写到script标签中

// alert('Hello World -1 !'); //页面起始就执行
document.write('Hello World -2!'); //页面中执行
console.log('Hello World -3！'); //控制台页面中执行

//声明变量
var a;
//为变量赋值
a = '123';
//可以声明和赋值一起
var age = 18;

console.log('a', a);
console.log('type', typeof a);
console.log('age ', age);
console.log('type', typeof age);

console.log('max number : ', Number.MAX_VALUE);
console.log('max number : ', Number.MIN_VALUE);

//尽量不要用一样的变量，后面的变量会代替前面相同变量
var a = 255;
a = a.toString();
var b = 123;
b = String(a);
console.log('a is ', a, 'and type is:', typeof a);
console.log('b is ', b, 'and type is:', typeof b);
