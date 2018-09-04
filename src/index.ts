/// Add ?, If gender is optional
const sayHi = (name: string, age: number, gender: string): void => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}!`);
};

sayHi("Chicrock", 32, "male");

export {};
