// object shorthand assignment

// let name = "babo";
// let age = 17;

// let person = {
//   name,
//   age,
// };

// console.log(person);

// Destructuring 구조분해할당

// let person = {
//   name: "babo",
//   age: 20,
// };

// let name = person.name;
// let age = person["age"];

// let { name, age } = person;

// console.log(name, age);

// let array = [1, 2, 3, 4];
// let [a, b, ...rest] = array;

// console.log(rest);

// spread 스프레드

// let person = { name: "noona", age: 12 };
// let person2 = { ...person, name: "babo", address: "의정부" };
// console.log(person2);

// console.log(person === person2);

// let a = [1, 2];
// let b = [...a, 3];
// let c = [...a, ...b];
// console.log(c);

// 삼항연산자
let person = { name: "babo", age: 19 };

if (person) {
  console.log(person.name);
} else {
  console.log("there is no person");
}

console.log(person ? person.name : "there is no person");
