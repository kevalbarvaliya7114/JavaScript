// ------------------------ Function -> Perform to Specific Task ------------------------

/* 
    function funName()      // declare

    function declare & initalize 
    function funName(arguments){
        ........statements
    }
     
    funName()               // function call
*/

// ------------------------ 1. NO ARGUMENTS NO RETURN FUNCTION ------------------------

// function sayHello() {
//     console.log('DDF');
// }
// sayHello();

// ------------------------ 2. NO ARGUMENTS WITH RETURN FUNCTION ------------------------

// function mySelf() {
//     return "i'm keval barvaliya";
// }
// console.log(mySelf());

// ------------------------ 3. WITH ARGUMENTS NO RETURN FUNCTION ------------------------

// function tataHexa(t, n, a) {
//     // console.log("Hello", t*n);
//     console.log(t + n, a);
// }
// tataHexa(10, 5, "john");

// ------------------------ 4. WITH ARGUMENTS WITH RETURN FUNCTION ------------------------

// function hyMex(p, e, m) {
//     return 'multiplication of p & m is : --->', p * m;
// }
// console.log(hyMex(3, 5, 6));

// ------------------------ FUNCTION EXPRESSION (anonymous function) ------------------------

// let data = function (k, k1) {
//     return k * k1;
// }
// console.log("Multiplication :-", data(1, 1));

// let data1 = new Function('s', 's1', 's2', 'return s+s1+s2');
// console.log("sum is : ", data1(5, 7, 8));

// ------------------- ------------------- ------------------- ---------------------
// function f1(){
//     let p , m;
//     p=+(prompt("enter the value of p: "));
//     m=+(prompt("enter the value of m: "));
//     let sum = p+m;
//     // return sum;
//     console.log('Addition' ,sum);
// }
// f1();

// function tes(){
//     // let i,j;
//     for(let i=1;i<=5;i++){
//         for(let j=1;j<=5;j++)
//             console.log(i);    
//         // console.log("\n");
//     }
// }
// tes();

// function fibonacci(){
//     let a=0,b=1,total;
//     for(let i=0;i<=10;i++){
//         console.log(a);
//         total=a+b;
//         a=b;
//         b=total;
//     }
// }
// fibonacci();

// function nto1(){
//     let n;
//     n=Number(prompt("Enter the value of n"));
//     for(let i=n;i>=1;i--){
//         console.log(i);
//     }
// }
// nto1();


// n=Number(prompt("value of n:"));
// function factorial(n) { 
//     let pp = 1; 
    
//     if(n === 0)
//         return 1;
//     for (let i = 2; i <= n; i++) 
//         pp = pp * i; 
//     return pp; 
// }

// console.log(factorial(n));
