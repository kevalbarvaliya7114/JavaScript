/* operator -> Arithmatic, Relational, logical, Unary, Assignment
*/

let a=10,b=7;

// Arithmatic Operator => + - * / %(Moduals) ++ -- **(Power)

console.log("Addition: ",a+b);
console.log("substraction: ",a-b);
console.log("Multiplication: ",a*b);
console.log("Division: ",a/b);
console.log("Reminder: ",a%b);
console.log(a++);
console.log(++a);
console.log(--a);
console.log(a--);
console.log(2**5);

// Relational Opedrator => < <= > >= == != === !==
/* 
    ==  -> check only value
    === -> check value and also check its data type(strictly behave)
*/

console.log(a<b);
console.log(a<=b);
console.log(a>b);
console.log(a>=b);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 != 10);
console.log(10 !== 10);

// Logical Operator => && || ! ^(both same value than return false(0))

console.log(true && false);
console.log(true && true);
console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(!true);
console.log(!false);
console.log(false ^ false);
console.log(true ^ true);
console.log(true ^ false);

// Assignment Operator (Short hand property) => += -= *= /= %= **=

console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);
console.log(a**=b);

// Ternory => ? :
console.log(10>30?"true":"false");

console.log(typeof(NaN));

let x= "";
// let x;
console.log("Value of x is: ",x);
console.log("type of x is:",typeof(x));
console.log(a*"abc");
console.log("10"-"s");





