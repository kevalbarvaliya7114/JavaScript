// 1. reverse

//   function reverse(n) {
//     n = n + "";
//     // n = Number(prompt("Enter the value of n :"));

//     return n.split("").reverse().join("");

// }
// console.log(Number(reverse(57698)))

// 2. sorting

// function nameo() {
//     let a = 'barvaliya';
//     return a.split("").sort().join("");

// }

// console.log(nameo());

// 3. first capital
// function upp(){
//     let u = 'my name is keval';
//     return u.slice().replace("my name is keval","My Name Is Keval");
// }
// console.log(upp());

// 4. longest print

// function long() {
//     let i = 'i want to be developer'
//     return i.split(" ")
//     if(i[0]>i[1,2,3,4]){
//         return (i[0]);
//     }else if(i[1]>i[0,2,3,4]){
//         return (i[1]);
//     }else if(i[2]>i[0,1,3,4]){
//         return (i[2]);
//     }else if(i[3]>i[0,1,2,4]){
//         return (i[3]);
//     }else if(i[4]>i[0,1,2,3]){
//         return (i[4]);
//     }
// }
// console.log(long());

// function perfect() {
//     let nu;
//     nu = Number(prompt("Enter the number that you want to check: "));
//     if (nu == 6 && 8 && 28 && 128 && 496) {
//         return "the number is perfect...";
//     } else {
//         return "the number is not perfect...";
//     }
// }

// console.log(perfect());

// function celfe() {
//     let c;
//     c = Number(prompt("Enter the Celsius:"));
//     return (c * 9/5) + 32;
// }

// console.log(celfe());

// function calc(){
//     let value1 , value2;
//     value1 = Number(prompt("Enter value 1:"));
//     let action = prompt("what are you want to action? (+ - * /) ");
//     value2 = Number(prompt("Enter value 2:"));

//     if(action == ('+')){
//         return value1 + value2;
//     }else if(action == ('-')){
//         return value1 - value2;
//     }else if(action == ('*')){
//         return value1 * value2;
//     }else if(action == ('/')){
//         return value1 / value2;
//     }
// }
// console.log(calc());

// function laregst() {
//     let a = Number(prompt("Enter the value of a:"))
//     let b = Number(prompt("Enter the value of b:"))
//     let c = Number(prompt("Enter the value of c:"))
//     if (a > b && a > c){
//         return "a is big";
//     }else if(b>a && b>c){
//         return "b is big";
//     }else{
//         return "c is big";
//     }
// }
// console.log(laregst());

// function factorial(f) {
//     if (f == 0 || f == 1){
//         return 1;
//     }else{
//         return f * factorial(f - 1)
//     }
// }
// console.log(factorial(5));

// function fibonacci(){
//     let a=0,b=1,total;
//     for(let i=0;i<=10;i++){
//     console.log(a);
//      total=a+b;
// 		a=b;
// 		b=total;
// 	}
// }
// function sum(n) {
//     return (n * (n + 1)) / 2;  
// }

// let n = 10;
// console.log( sum(n));

// function guess() {
//     let p = Math.floor(Math.random() * 10) + 1;
//     let guess = null;
//     let a = 0;

//     while (guess !== randomNumber) {
//         guess = parseInt(prompt('Guess a number between 1 and 10:'), 10);
//         a++;

//         if (guess > randomNumber) {
//             console.log('high');
//         } else if (guess < randomNumber) {
//             console.log('low');
//         } else {
//             console.log(a );
//         }
//     }
// }

// function vowel(str) {
//     let vowels = 'aeiouAEIOU';
//     let vowel = 0;
//     let consonant = 0;

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowel++;
//         } else if (char.toLowerCase() !== char.toUpperCase()) {
//             consonant++;
//         }
//     }

//     return { vowel, consonant };
// }

// let a = 'Hello World';
// let { vowel, consonant } = VowelsAndConsonants(a);
// console.log(vowel , consonant);

// function LeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true;  
//             } else {
//                 return false; 
//             }
//         } else {
//             return true;  
//         }
//     } else {
//         return false; 
//     }
// }

// // Example usage:
// let
 year = 2024;
// console.log(LeapYear ? 'yes' : 'not ');
// console.log(fibonacci());

function reverse(){
    let n = prompt("Enter the word");
    return n.split("").reverse().join("");
}
console.log(reverse());
