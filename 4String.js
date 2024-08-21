// string -> Like the array
// template literal

// let a=100;
// let data = "hello world";
// let data='hello "swara" world';
// let data=`hello's "swara" world`;
// let data = "value of a is :"+ a;
// let data = `value of a is : ${a + 20}`
// console.log(data);

// Methods

// let data = `JavaScript is one of the 3 languages all web developers must learn`;
// console.log(data);

// length
// console.log(data.length);

// charAt(position) -> return char
// console.log(data.charAt(50));

// charCodeAt(position) -> return char ASCII value
// console.log(data.charCodeAt(10));

// toUpperCase() -> return upper case string
// console.log(data.toUpperCase());

// toLowerCase() -> return Lower case string
// console.log(data.toLowerCase());

// split("") -> return spliting string
// let data = "JavaScript is one of the 3 languages";
// console.log(data.split(""));

// trim() -> remove both side space
// trimStart() -> remove start side space
// trimend() -> remove end side space
// let data="           JavaScript is one of the 3 languages.      "
// console.log(data);
// console.log(data.trim());
// console.log(data.trimStart());
// console.log(data.trimEnd());

// padStart()
// padEnd()
// let data="1256";
// console.log(data.padEnd(10,"x"));
// console.log(data.padStart(10,"x"));

// slice(Start,end)

let data= `JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich in 1997.`

// console.log(data.slice(5,10));
// console.log(data.slice(5));
// console.log(data.slice(-5));
// console.log(data.slice(-5,-2));

// sunstring(start,end)

// console.log(data.substring(11,30));
// console.log(data.substring(11));
// console.log(data.substring(-11));
// console.log(data.substring(-11,10));

// substr(start,end)
// console.log(data.substr(5,10));
// console.log(data.substr(-14,10));

// concat() => merge multiple string
// let a="hello ", b="jasn ", c="olympic ";
// console.log(data.concat(a,c,b));

// replace
console.log(data.replace("JavaScript is","it is"));
console.log(data.replaceAll("JavaScript is","it is"));
