// 1. Use strict
// added in ES 5
// use this for Vanila Javascript
"use strict";

// 2. Variable, rw(read / write)
// let (added in ES6)
let globalName = "global name"; //  --> global scope (전역 변수)
{
  let name = "ellie"; //  --> block scope (지역 변수)
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declareation from bottom to top)
// 호이스팅이란 어디에 선언했는지 상관없이 항상 위로 제일 위로 선언을 끌어 올려 주는 것
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types -- 변수 타입
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity); // --> infinity
console.log(negativeInfinity); // --> -infinity
console.log(nAn); // --> NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890; // over (-2**53) ~ (2**53) 자바스크립트의 넘버의 표현 범위
const bigInt = 1234567890123456789012345678901234567890n; // 숫자의 마지막에 n을 붙이면 bigInt 타입으로 표현 가능
console.log(`value: ${binInt}, type: ${bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`vlaue: ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`; // templete literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value:" + helloBob + "type: " + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol("id");
const gSymbol2 = Symbol("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.decription}, type: ${typeof symbol1.decription}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
let text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
let text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
let text = "8" + "2";
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
