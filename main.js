console.log("-1-");
console.log("helloshki!");
console.log(true);
console.log(54673);
console.log("-2-");

const less = "uchim js";
console.log(less);
const birthDate = 1990;
console.log(birthDate);
let userName = "John";
console.log(userName);
userName = "Bill";
console.log(userName);
const isMarried = true;
console.log(isMarried);
console.log("-3-");

let x = 10;
let y = 7;
let result = x + y;
console.log(result);
//oder
console.log(x + y);
let z = x * 2;
console.log(x + y + z);
console.log("-4-");

let greeting = "Hello, ";
let fName = "John!";
let result1 = greeting + fName;
console.log(result1);
console.log("-5-");

let a = "300";
let b = "62";
console.log(a + b);
console.log("-6-");

let mName = "Alex!";
let greeting2 = `Hi ${mName}! How are you?`;
console.log(greeting2);
console.log("-7-");

let s = 16;
let d = 5;
if (s > d) {
  console.log("s > d");
} else if (s === d) {
  console.log("s = d");
} else {
  console.log("s < d");
}
console.log("-8-");
const mark = 5;
switch (mark) {
  case 1:
    console.log("Its bud, you have 1");
    break;
  case 2:
    console.log("Its bud toolbar, you have 2");
    break;
  case 3:
    console.log("Its ok, you have 3");
    break;
  case 4:
    console.log("Its gud, you have 4");
    break;
  case 5:
    console.log("Very gud, you have 5");
    break;
  default:
    console.log("there is no such assessment");
}

console.log("-9-");
const fruits = ["Apple", "Mango", "Orange", "Sliva", "Tomato", "Potato"];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[0]);
const example = ["Apple", 20, true, "Orange", false, "Sliva", 300];
console.log(example);
console.log(example[0]);
console.log(example[2]);
console.log(example[1]);

console.log("-10-for-let-");
console.log("start");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("finish");

console.log("-10-a-for-let-");
console.log("start");
for (let i = 0; i < 10; i++) {
  console.log("hi liss");
  console.log("i = " + i);
}
console.log("finish");

console.log("-11-FOREACH-");
const fruits1 = ["Apple", "Mango", "Orange", "Sliva"];
fruits1.forEach(function (item, index) {
  console.log(`element ${item} has index ${index}`);
});

const fruits2 = ["Apple", "Mango", "Orange", "Sliva"];
fruits2.forEach(function (value) {
  console.log(`element ${value} `);
});

const fruits3 = ["Apple", "Mango", "Orange", "Sliva"];
fruits3.forEach(function (value, i) {
  console.log(`element ${value} has index ${i}`);
});

console.log("-12-function-");
const greeting3 = (myName) => {
  console.log(`Hello ${myName}! How are you?`);
};
console.log("Liss");
console.log("Mis");
console.log("John");
console.log("Peter");

console.log("-13-calculateSum-");
const calculateSum = (n, p) => {
  let result3 = n + p;
  console.log(1);
  return result3;
  // console.log(2);--<--dont right
};
let answer = calculateSum(2, 9);
console.log(answer);

console.log("-13-a-");
const calculateSum1 = (n, p) => {
  let result4 = n + p;
  console.log(result4);
};
calculateSum1(7, 10);

console.log("-14-");
const calculateSum2 = (n, p) => {
  let result5 = n + p;
  return result5;
};
let res = calculateSum2(calculateSum2(25, 7), calculateSum2(47, 6));
console.log(res);

console.log("-14-a-");
console.log(calculateSum2(calculateSum2(1, 2), calculateSum2(3, 4)));

console.log("-15-FUNCTION-DECLARATION-");
calcSum(10, 12);
function calcSum(n, p) {
  let result6 = n + p;
  console.log(result6);
  return result6;
}

console.log("-15-FUNCTION-EXPRESSION-");
const calcSum1 = (n, p) => {
  let result7 = n + p;
  console.log(result7);
  return result7;
};
calcSum1(4, 5);

console.log("-16-a-function-");
const petName = "Pet";
const petAge = 29;
const petSpeciality = "coder";
const petCity = "Moscow";
const sayHi = (petName, petAge, petSpeciality, petCity) => {
  console.log(
    `Hi, I'm ${petName}, I'm ${petAge} and I'm ${petSpeciality} from ${petCity}.`
  );
};
sayHi(petName, petAge, petSpeciality, petCity);

console.log("-16-OBJECT-");
const peter = {
  pName: "Peter",
  age: 28,
  speciality: "coder",
  city: "Hamburg",
};
console.log(peter);
console.log(peter.age);
sayHi(peter.pName, peter.age, peter.speciality, peter.city);

console.log("-16-b-");
// const elisa = {
//   eName: "Elisa",
//   eAge: 27,
//   eSpeciality: "doctor",
//   eCity: "Berlin",
//   sayHello: function (eName, eAge, eSpeciality, eCity) {
//     console.log(
//       `Hello I'm ${eName}, I'm ${eAge} and I'm ${eSpeciality} from ${eCity}.`
//     );
//   },
// };
// elisa.sayHello(elisa.eName, elisa.eAge, elisa.eSpeciality, elisa.eCity);

console.log("-16-b-");
const elisa = {
  eName: "Elisa",
  eAge: 27,
  eSpeciality: "doctor",
  eCity: "Berlin",
  sayHello: function () {
    console.log(
      `Hello I'm ${this.eName}, I'm ${this.eAge} and I'm ${this.eSpeciality} from ${this.eCity}.`
    );
  },
};
elisa.sayHello();

console.log("-17-a-");
const lisa = {
  eName: "Lisa",
  eAge: 37,
  eSpeciality: "doctor",
  eCity: "Berlin",
  sayHello: function () {
    console.log(
      `Hello I'm ${this.eName}, I'm ${this.eAge} and I'm ${this.eSpeciality} from ${this.eCity}.`
    );
  },
};
elisa.sayHello();
const belisa = {
  eName: "Belisa",
  eAge: 20,
  eSpeciality: "doctor",
  eCity: "Tokio",
  sayHello: function () {
    console.log(
      `Hello I'm ${this.eName}, I'm ${this.eAge} and I'm ${this.eSpeciality} from ${this.eCity}.`
    );
  },
};
elisa.sayHello();

console.log("-17-constructor-");

function Person(sname, age, sspec, scity) {
  this.sname = sname;
  this.age = age;
  this.sspec = sspec;
  this.scity = scity;
  this.sayGudBay = function () {
    console.log(
      `Hello I'm ${this.sname}, I'm ${this.age} and I'm ${this.sspec} from ${this.scity}.`
    );
  };
}

const asya = new Person("Asya", 30, "designer", "New York");
console.log(asya);
asya.sayGudBay();

const liss = new Person("Liss", 27, "coder", "Delly");
console.log(liss);
liss.sayGudBay();

console.log("-18-CLASSES-");
class Person1 {
  constructor(cname, cage, cspec, ccity) {
    this.cname = cname;
    this.cage = cage;
    this.cspec = cspec;
    this.ccity = ccity;
  }
}
const marem = new Person1("Marem", 21, "economist", "Brussel");
console.log(marem);

console.log("-18-CLASSES-");
class Person2 {
  constructor(cname, cage, cspec, ccity) {
    this.cname = cname;
    this.cage = cage;
    this.cspec = cspec;
    this.ccity = ccity;
  }
  sayGudBay1() {
    console.log(
      `Hello, I'm ${this.cname}, I'm ${this.cage} and I'm ${this.cspec} from ${this.ccity}.`
    );
  }
}
const acrasavka = new Person2("Acrasavka", 18, "criminalist", "Brussel");
console.log(acrasavka);
acrasavka.sayGudBay1();

console.log("--");
