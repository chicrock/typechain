const name = "Chicrock",
  age = 32,
  gender = "male";

/// Add ?, If gender is optional
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age, gender);
sayHi(name, age);

export {};
