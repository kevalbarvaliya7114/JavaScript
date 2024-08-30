// Array -> Store multiple value in one variable
// index -> start with 0

// let data = [11,77,"53",true,false,"skill",10,4,{a:40}];
// console.log(data);
// console.log(data[5]);
// console.log(typeof(data));

// let data = [1, 22, 333, 4444];
// data.length = 55;
// data[33] = 40;
// data[0] = "code";
// console.log(data);

// Array Basic Method

// let data = [22,55,99,230,40,60,75,65];
// console.log(data);

// Push -> add into last position
// data.push(402);
// data.push(42,41,85);
// console.log(data);

// Pop -> remove into last position
// data.pop()
// data.pop()
// console.log(data);

// Shift() -> remove into first position
// data.shift()
// data.shift()
// console.log(data);

// UnShift() -> Add into first position
// data.unshift(50)
// data.unshift(40)
// console.log(data);

// Concat -> Multiple array merging 
// let a = ["A","B","C"];
// console.log(data.concat(["Hello"],a));

// Sort() -> sorting elements 
let data = ['z','y','s','t','a','c'];
console.log(data.sort());
console.log(data.sort((a,b)=>a-b));

// Reverse() -> reverse element
console.log(data.reverse());

// includes() -> check element includes or not
console.log(data.includes('a'));

// Slice -> Slice to array
console.log(data.slice(1,3));4

// splice(startIndex, deletecount) -> removing specific index element
console.log(data.splice(3,3,500,546,854));
console.log(data);
