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

// LECTURE: Equality Operators: == vs. ===
// 1.	Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
// 2.	If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
// 3.	Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4.	Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5.	Test the code with different values of 'numNeighbours', including 1 and 0.
// 6.	Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
// 7.	Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
// 8.	Reflect on why we should use the === operator and type conversion in this situation

let numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

// LECTURE: Logical Operators
// 1.	Comment out the previous code so the prompt doesn't get in the way
// 2.	Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
// 3.	Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// 4.	If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('
// 5.	Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada)

if ((language = "English" && population < 50 && !isIsland)) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// LECTURE: The switch Statement
// Use a switch statement to log a message based on the language spoken.
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "Malayalam":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too");
}

// LECTURE: The Conditional (Ternary) Operator
// Use a ternary operator to check if the population is above average.

console.log(`${country}'s population is ${population > 33} average.`);
