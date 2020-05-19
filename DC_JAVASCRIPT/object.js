// Objects
// one of the JavaScript's data types.
// a collection of related data and / or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const dean = { name: "dean", age: 4 };
print(dean);

// with JavaScript magic (dynamically typed language)
// can add properties later
dean.hasJob = true;
console.log(dean.hasJob);

delete dean.hasJob;
console.log(dean.hasJob);

// 2. Computed properties
console.log(dean.name);
console.log(dean["name"]);
dean["hasJob"] = true;
console.log(dean.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(dean, "name");
printValue(dean, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("dean", 30);
console.log(person4);

// 4. Constructor Funtion
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existencecheck (key in obj)
console.log("name" in dean);
console.log("age" in dean);
console.log("random" in dean);
console.log(dean.random);

// 6. for..in vs for..of

// for (key in obj)
console.clear();
for (key in dean) {
  console.log(key);
}

// for (value of iterable)

const array = [1, 2, 4, 5];
// 안좋은 예시
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// 짧아진 편한 예시
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "dean", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();

console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };

const fruit2 = { color: "blue", size: "big" };

const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color);

console.log(mixed.size);
