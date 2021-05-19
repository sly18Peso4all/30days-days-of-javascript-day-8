// Exercises: Level 1
/*
1) Create an empty object called dog
2) Print the the dog object on the console
3) Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
4) Get name, legs, color, age and bark value from the dog object
5)Set new properties the dog object: breed, getDogInfo
*/

// Solution 1
const dog = {};

// Solution 2
console.log(dog);

// Solution 3
dog.name = "Rover";
dog.legs = 4;
dog.color = "black";
dog.bark = "woof";

dog.barkingSound = function () {
  return `${this.sound}`;
};

console.log(dog);

// Solution 4
const getKey = Object.keys(dog);
console.log(getKey);

// Solution 5
dog.breed = "German shepherd";
dog.getDogInfo = function () {
  console.log(`${this.name} is a ${this.color}`);
};

console.log(dog);

console.log("");
console.log("");
console.log("");
console.log("Solution  Exrecise 2===============");

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Solution 2
let arr = [];
for (const key in users) {
  let point = users[key].points;
  if (point >= 50) {
    arr.push(point);
  }
}
console.log(arr);
console.log(arr.length);

// Q) Get all keys or properties of users object
// Solution 3
const keyObj = Object.keys(users);

// Q) Get all values or properties of users object
// Solution 4
const valObj = Object.value(users);

// CHECK 1
// const val = Object.values(users);
// // console.log(val);

// console.log("+++++++++");

// let valu;
// for (skill in val) {
//   valu = val[skill].skills.length;
//   console.log(valu);
// }

// CHECK 2
let { Alex, Asab, Brook, Daniel, John, Thomas, Paul } = users;

function checkCourseSize(person) {
  return person.skills.length;
}
console.log(checkCourseSize(Asab));

// CHECK 3
console.log("*****");
for (var user in users) {
  let userSkill = users[user];
  for (var index = 0; index < userSkill.length; i++) {
    console.log(userSkill[index]);
  }
  //   console.log(user, userSkill);
}

// Solution 1
const personAccount = {
  firstName: "Mark",
  lastName: "Gor",
  income: [299, 23000, 28282],
  expenses: [25, 2823, 372],
  totalIncome() {},
  totalExpenses() {},
  accountInfo() {},
  addIncome() {},
  addExpenses() {},
};

// Solution 2
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

function createSignUp(user) {
  user.forEach(function (person) {
    if (person.username) {
      console.log(person);
    }
  });
}

createSignUp(users);

function xyz(x, y) {
  return {
    sum: (x, y) => x + y,
    product: (x, y) => x * y,
  };
}

console.log(xyz().product(2, 30));
console.log(xyz().sum(99, 1));
