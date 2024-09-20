// Class & Object

// class sayHello{
//     constructor(name){
//         // console.log(name);
//         this.name = name;
//     };

//      goodBye(a){
//         console.log(this.name);
//         console.log(a*a);
//     }
//     getter(){
//         console.log(${this.name} is live in Delhi)
//     }
// };

// let data = new sayHello("John Peter");
// data.goodBye(10)
// data.getter()



// Object
// let hello = new Object();
// let sayHello = {
//     name: "john peter",
//     age: 25,
//     hobbies: ['Sport', 'Music'],
//     address:{
//         line1: "Hello",
//         line2: "world",
//         city: "Surat"
//     },
//     goodBy: function (){
//         console.log('GoodBye Guys.....')
//     }
// };

// console.log(sayHello);
// console.log(sayHello.goodBy());
// console.log(sayHello["hobbies"]);

// let hello = new Object();
// hello.name = "Keval";
// hello.age = 25
// hello.goodBye = function(){
//     return `good Bye ${this.name}`
// }
// hello.age = 60
// console.log(hello);
// console.log(hello.goodBye());

// delete hello.goodBye
// console.log(hello);

// shallow copy & deep Copy
// shallow copy
// let data = [11,22,33,44];
// let a = data;
// a.push(55);
// console.log("Source: ",data);
// console.log("Copying: ",a);

// let hello = {
//     name: "Hello",
//     age: 15
// };
// let person = hello;


// delete hello.age
// console.log(hello);
// console.log(person);


// Deep Copy
// let data = [11,22,33,44];
// let a = [...data];
// data.pop();
// a.push(55);
// console.log("Source: ",data);
// console.log("Copying: ",a);

// let hello = {
//     name: "Hello",
//     age: 15
// };
// let person = {...hello};


// delete hello.age
// console.log(hello);
// console.log(person);
