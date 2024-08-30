// variable => var, let, const

// var
// var a;      // declare
// a=100;      // assign
// var a=40;
// console.log("value of a is: ", a);   //40

// console.log("value of a is: ",a);       //150
// var a=150;

// {
//     var x = 15;
//     console.log("value of x is: ", x);
//     {
//         var x = 150;
//         console.log("value of x is: ", x);
//     }
//     console.log("value of x is: ",x);
// }

// let
// let x;
// x = 11;
// {
//     let x = 15;
//     console.log("value of x is: ", x);
//     {
//         let x = 150;
//         console.log("value of x is: ", x);
//     }
//     console.log("value of x is: ", x);
// }

// const
// const a=10;
// console.log("value of a is: ",a);

// {
//     const x = 15;
//     console.log("value of x is: ", x);
//     {
//         const x = 150;
//         console.log("value of x is: ", x);
//     }
//     console.log("value of x is: ", x);
// }

// hoisting
console.log(a);
var a = "Hello";
