let a = 0;
let b = 1;
let temp = a;
let arr = [];

console.log(a);
console.log(a + b);
for (let i = 0; i < 8; i++) {
  temp = a;
  a = b;
  b = temp + b;
  arr[i] = b;
  console.log(arr[i]);
}
