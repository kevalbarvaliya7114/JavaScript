// Date Object

// let data = new Date;  // current date 
// let data = new Date("2024-11-14"); // Manually Date  
// let data = new Date(2021,1);   
// let data = new Date(2021,1,14); 
// let data = new Date(2021,1,14,25);   
// let data = new Date(2021,1,14,25,33);   
// let data = new Date(2021,1,14,25,33,10);   
// let data = new Date(2021,1,14,25,33,10,300000);   

let data = new Date("2024-11-12 10:50:10:500")
console.log(data);
// console.log(data.getDate());
// console.log(data.getDay());
// console.log(data.getFullYear());
// console.log(data.getHours());
// console.log(data.getMilliseconds());
// console.log(data.getMinutes());
// console.log(data.getMonth());
// console.log(data.getSeconds());
// console.log(data.getTime());
// console.log(data.getTimezoneOffset());
// console.log(data.getUTCDate());

data.setDate(11);
data.setFullYear(2022);
data.setHours(5);
data.setMilliseconds(4000);
data.setMinutes(57);
data.setSeconds(50);
data.setTime(1000000);
data.setUTCDate(50);
console.log(data);
