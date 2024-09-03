// Function -> Perform to Specific Task

/* 
    function funName()      // declare

    function declare & initalize 
    function funName(arguments){
        ........statements
    }
     
    funName()               // function call
*/

// 1. NO ARGUMENTS NO RETURN FUNCTION

function sayHello() {
    console.log('DDF');
}
sayHello();

// 2. NO ARGUMENTS WITH RETURN FUNCTION

function mySelf() {
    return "i'm keval barvaliya";
}
console.log(mySelf());

// 3. WITH ARGUMENTS NO RETURN FUNCTION

function tataHexa(t, n, a) {
    // console.log("Hello", t*n);
    console.log(t + n, a);
}
tataHexa(10, 5, "john");

// 4. WITH ARGUMENTS WITH RETURN FUNCTION

function hyMex(p, e, m) {
    return 'multiplication of p & m is : --->', p * m;
}
console.log(hyMex(3, 5, 6));

// FUNCTION EXPRESSION (anonymous function)

let data = function (k, k1) {
    return k * k1;
}
console.log("Multiplication :-", data(1, 1));

let data1 = new Function('s', 's1', 's2', 'return s+s1+s2');
console.log("sum is : ", data1(5, 7, 8));
