// 🔹 for...of Loop Solutions
// 1
for (let num of [1, 2, 3, 4]) console.log(num);

// 2
for (let ch of "hello") console.log(ch);

// 3
for (let num of [10, 20, 30]) console.log(num);

// 4
let sum = 0;
for (let num of [5, 10, 15]) sum += num;
console.log(sum);

// 5
for (let color of ["red", "green", "blue"]) console.log(color);

// 6
for (let num of [2, 4, 6]) console.log(num * num);

// 7
for (let name of ["Alice", "Bob", "Charlie"]) console.log(name);

// 8
for (let val of [true, false, true]) console.log(val);

// 9
let count = 0;
for (let n of [1, 2, 3, 4, 5]) count++;
console.log(count);

// 10
for (let num of [1, 3, 5]) console.log(num * 2);



// 🔹 for...in Loop Solutions
// 1
for (let key in {a:1, b:2, c:3}) console.log(key);

// 2
let obj2 = {x:10, y:20};
for (let key in obj2) console.log(obj2[key]);

// 3
let obj3 = {name:"John", age:25};
for (let key in obj3) console.log(key, obj3[key]);

// 4
let obj4 = {p:5, q:10, r:15};
let keyCount = 0;
for (let key in obj4) keyCount++;
console.log(keyCount);

// 5
let obj5 = {fruit:"apple", color:"red"};
for (let key in obj5) console.log(`${key}: ${obj5[key]}`);

// 6
let obj6 = {a:1, b:2};
let keys = "";
for (let key in obj6) keys += key;
console.log(keys);

// 7
let obj7 = {name:"Sam", age:30};
console.log("age" in obj7);

// 8
let obj8 = {a:5, b:15, c:25};
for (let key in obj8) if(obj8[key] > 10) console.log(obj8[key]);

// 9
let obj9 = {name:"Eva", age:22};
for (let key in obj9) console.log(typeof obj9[key]);

// 10
let obj10 = {id:1, code:2};
let arrKeys = [];
for (let key in obj10) arrKeys.push(key);
console.log(arrKeys);



// 🔹 filter Solutions
// 1
console.log([1,2,3,4,5,6].filter(n => n%2===0));

// 2
console.log([10,11,12,13].filter(n => n%2!==0));

// 3
console.log([2,8,3,10].filter(n => n>5));

// 4
console.log(["hi","hello","to","world"].filter(w => w.length>3));

// 5
console.log([5,15,8,20].filter(n => n<10));

// 6
console.log(["apple","banana","avocado"].filter(w => w.startsWith("a")));

// 7
console.log([-3,-1,0,2,4].filter(n => n>0));

// 8
console.log(["dog","cat","lion","cat"].filter(v => v==="cat"));

// 9
console.log([3,6,7,9,10].filter(n => n%3===0));

// 10
console.log(["John","Paul","Sam"].filter(n => n.length===4));



// 🔹 map Solutions
// 1
console.log([1,2,3].map(n => n*2));

// 2
console.log([2,3,4].map(n => n**2));

// 3
console.log(["a","b","c"].map(ch => ch.toUpperCase()));

// 4
console.log(["hi","hello","world"].map(w => w.length));

// 5
console.log([5,10,15].map(n => n+10));

// 6
console.log([1,2,3].map(String));

// 7
console.log(["cat","dog","lion"].map(w => w[0]));

// 8
console.log([1,2,3].map(n => -n));

// 9
console.log([2,5,8].map(n => n%2===0));

// 10
console.log(["hi","bye"].map(w => w+"!"));
