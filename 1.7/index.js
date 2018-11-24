const a = 221;  // const: it doesn't change
let b = a - 5;  // let: it can change
a = 4;          // can not change(occur error)

// // var: it can change 
// // but 'let' is better than 'var'
// // 'var' can't check creating overlapped variable
// var a = 221;    
// var b = a - 5;
// a = 4;

console.log(b, a);
