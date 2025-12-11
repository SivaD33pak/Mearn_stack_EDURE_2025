// LECTURE: Values and Variables
// 1. Declare variables called ‘country’, 'continent' and 'population' and assign their values according to your own country (population in millions, e.g., 1400 million for India).
// 2. Log their values to the console.

const country = "India";
const continent = "Asia";
let population = 1400; // in millions
console.log(country, continent, population);

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value.
// 2. Also declare a variable 'language', but don't assign it any value yet.
// 3. Log the types of 'isIsland', 'population', 'country' and 'language' to the console.

const isIsland = false;
let language;
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

// LECTURE: let, const, and var
// 1. Set the value of 'language' to the language spoken where you live (e.g., "Malayalam").
// 2. Think about which variables should be const variables (e.g., 'country', 'continent').
// 3. Change a const variable and observe what happens.

language = "Malayalam";
//Declare country and continent using const because that values need not to be changed
// country = "USA"; // Error: Assignment to constant variable
console.log(language);

// LECTURE: Basic Operators
// 1. If your country split in half, how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result.
// 3. Does your country have more people than Finland (population 6 million)?
// 4. Does your country have less people than the average population (33 million)?
// 5. Create a string: 'Portugal is in Europe, and its 11 million people speak Portuguese'.

const halfPopulation = population / 2;
console.log(halfPopulation);
console.log(++population);
console.log(population > 6); // Finland's population
console.log(population < 33); // Average population
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// Strings and Template Literals
// Recreate the 'description' variable using template literal syntax.
console.log(
  `${country} is in ${continent}, and its ${population} million people speak ${language}`
);

// LECTURE: Taking Decisions: if/else Statements
// 1.	If your country's population is greater than 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
// 2.	After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average.`
  );
}

// LECTURE: Type Conversion and Coercion
// Predict results for these operations, then check your predictions.
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // "417"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
