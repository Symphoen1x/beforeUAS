console.log("Hello World!");


console.log("Inisiasi variable nilai syntaxnya:")
const name = 'Dicoding'; //tidak bisa diubah
let location = 'Bandung'; //bisa diubah(assign)


console.log("assign variabel syntaxnya:" ) 
location = 'Jakarta';
console.log(location)


console.log("function expression syntaxnya:")
// Example 1 versi pakai const var = ga bisa di assign value walaupun parenthessnya pakai let
/*
const convertCelsiusToFahrenheit = function (temperature=10) {
  const result = (9 / 5) * temperature + 32;
  return result;
};
*/
//const temperatureInFahrenheit = convertCelsiusToFahrenheit();
//const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
//console.log('Hasil konversi:', temperatureInFahrenheit);

// const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
// console.log('Hasil konversi:', temperatureInFahrenheit);

// let temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
//console.log('Hasil konversi:', temperatureInFahrenheit);

//temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
//console.log('Hasil konversi:', temperatureInFahrenheit);


// example 2 versi pakai lett var = bisa di assign value
let convertCelsiusToFahrenheit = function (temperature=10) {
    const result = (9 / 5) * temperature + 32;
    return result;
  };
  
let temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

temperatureInFahrenheit = convertCelsiusToFahrenheit(50);
console.log('Hasil konversi:', temperatureInFahrenheit);



console.log("Arrow Function")
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
};
temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

console.log("Refactor: modern syntax arrow function simply")
const convertCelsiusToFahrenheitInConciseSyntax = 
  (temperature) => (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(10);
console.log('Hasil konversi:', temperatureInFahrenheit);





// fist-class citizen pada function yang intinya suatu pemanggilan identifier function bisa dijadikan nilai dan disimpan dalam argumen function lain
// konteksnya masih function di dalam function lain yang berbeda body
function multiply(a, b) {
    return a * b;
  }
  
function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);
  

// mengembalikan nilai function dari suatu function yang sama, ini gabut sih!
function multiplier(x) {
    return function(num) {
      return x * num;
    };
  }
  
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));



const user = {
  'nickname': 'Dicoding',  
  lastName: 'Indonesia',
  age: 9
};


// pemanggilan value tanpa dimasukan dalam var
console.log(user.age) //dot
console.log(user['name']) //square bracket


// objek destruction
// ternyata destructing ini tidak memandang jenis penulisan key
const {nickname, lastName, age } = user;

// cara ini yang awalnya properti(key-value) jadi disimpan dalam variabel!
console.log(lastName, age); // Output: Dicoding Indonesia


const obj = {
  b: "B",
  3: "tiga",
  a: "A",
  1: "satu"
};

for (const key in obj) {
  console.log(key);
}



// switch
// Bedang

