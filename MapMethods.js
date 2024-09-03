// Map Methods

// let data = new Map([
//     [1,'hello']
// ]);
// data.set(2,'ye');
// data.set(30,'yue');
// data.set(4,'ohk');
// console.log(data);
// console.log(data.get(2));
// console.log(data.delete(2));
// console.log(data.has(4));
// console.log(data.size);
// console.log(data.entries());

// let txt = "";
// data.forEach((val,key) =>{
//     txt += val + "~~~~~" + key + "\n"
// })
// console.log(txt);

// Set Methods 

let data = new Set([1,2,3,4,5]);
console.log(data);
data.add(10);
data.delete(1);
data.entries();
console.log(data.has(5));
console.log(data.keys());
console.log(data.size);
console.log(data.values());

let txt = "";
data.forEach((val,key) =>{
    txt += val + "~~~~~" + key + "\n"
})
console.log(txt);