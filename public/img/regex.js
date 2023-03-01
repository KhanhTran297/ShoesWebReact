// Regular expression: bieu thuc chinh quy
// 1/ hai cach khai bao voi regex
const re1 = /hello/;
const re2 = new RegExp("hello");

// hello world
// RegExp.test(value) neu dung -> true
console.log(re1.test("hello world"));
