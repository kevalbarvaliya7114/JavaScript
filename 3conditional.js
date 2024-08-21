// conditional Statements => if/else, loops, switch case, break, continue
// alert("Hello World");
// let a, b, c;
// a = Number(prompt("Enter value of a:"));
// b = Number(prompt("Enter value of b:"));
// c = Number(prompt("Enter value of c:"));

// console.log("Value of a :", a, typeof (a));
// console.log("Value of b :", b, typeof (b));

// IF/ELSE

// if (a > b) {
//     if (a > c)
//         console.log("largest value is: ", a);
//     else
//         console.log("largest value is: ", c);
// }else{
//     if(b>c)
//         console.log("largest value is: ", b);
//         else
//         console.log("largest value is: ", c);
// }

// NESTED IF/ELSE

// if(a>b && a>c)
//     console.log("largest value is:",a);
// else if(b>c)
//     console.log("largest value is:",b);
// else
//     console.log("largest value is:",c);         

// SWITCH CASE
// switch (a) {
//     case 1:
//         console.log('Hello');
//         break;
//     case 2:
//         console.log('Sq');
//         break;
//     default:
//         console.log('wrong input');
//         break;
// }

let txt = "";
for(let i=1; i<=15; i++){
    txt += i + "\t";
}
console.log(txt);

// let a = 1;
// do{
//     if(a==10)
//         continue;
//     console.log(a);
//     a++;
// }while (a<=15);