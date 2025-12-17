//Coding Challenge #5
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function calcAverage to calculate the average of 3 scores.
// This function should have three parameters and return a single number (the
// average score).
// 2. Create two new variables — scoreDolphins and scoreKoalas, and assign the
// value returned from the calcAverage function to them (you will need to call
// this function, and pass scores as arguments).
// 3. Create a function checkWinner that takes the average score of each team as
// parameters (avgDolphins and avgKoalas), and then logs the winner to the
// console, together with the victory points, according to the rule above.
// Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of
// hard-coded values).
// 4. Use the checkWinner function to determine the winner for both DATA
// 1 and DATA 2.
// 5. Ignore draws this time. Instead, log No team wins... to the console if there is
// no winner.
// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(scoreDolphins, scoreKoalas) {
  if (scoreDolphins >= scoreKoalas * 2) {
    console.log(`Dolphins win (${scoreDolphins}  vs  ${scoreKoalas})`);
  } else if (scoreKoalas > scoreDolphins * 2) {
    console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`);
  } else {
    console.log("Neither team wins");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge #6
// Steven wants you to improve his tip calculator, using the same rules as before — tip
// 15% of the bill if the bill value is between 50 and 300, and if the value is different, the
// tip is 20%.
// Your tasks:
// 1. Write a function calcTip that takes any bill value as an input and returns the
// corresponding tip, calculated based on the rules above (you can check out the
// code from the first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So, create an array called bills containing the test
// data below.
// 3. Create an array called tips containing the tip value for each bill, calculated
// from the function you created before.
// 4. BONUS: Create an array totals containing the total values, so the bill + tip.
// TEST DATA: 125, 555, and 44.
// Hint: Remember that an array needs a value in each position, and that value can actually
// be the returned value of a function! So you can just call a function as array values (so don't
// store the tip values in separate variables first, but right in the new array)

let bills = [125, 555, 44];
let tips = [];

let calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

console.log(tips);

// Coding Challenge #7
// Let's go back to Mark and John comparing their BMIs!
// This time, let's use objects to implement the calculations! Remember: BMI = mass /
// (height * height) (mass in kg and height in meters).
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass,
// and height (Mark Miller and John Smith). Name these objects
// as mark and john, and their properties exactly as fullName, mass and height.
// 2. Create a calcBMI method on each object to calculate the BMI (the same
// method on both objects). Assign the BMI value to a property, and also return it
// from the method.
// 3. Log to the console who has the higher BMI, together with the full name and
// the respective BMI. Example: "John Smith's BMI (28.3) is higher than
// Mark Miller's (23.9)!".
// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m
// tall.

let mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

let john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
} else {
  console.log(
    `${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})`
  );
}

// Coding Challenge #8
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array called bills containing all 10 test bill values.
// 2. Create empty arrays for the tips and the totals (tips and totals)
// 3. Use the calcTip function we wrote before (included in the starter code) to
// calculate tips and total values (bill + tip) for every bill value in
// the bills array. Use a for loop to perform the 10 calculations!
// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
// BONUS:
// Write a function calcAverage which takes an array called arr as an argument. This
// function calculates the average of all numbers in the given array. This is
// a DIFFICULT challenge! Here is how to solve it if you feel like it:
// 1. First, you will need to add up all values in the array. To do the addition, start by
// creating a variable sum that starts at 0. Then loop over the array using a for
// loop. In each iteration, add the current value to the sum variable. This way, by
// the end of the loop, you have all values added together.
// 2. To calculate the average, divide the sum you calculated before by the length of
// the array (because that's the number of elements).
// 3. Call the function with the totals array.

let bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips2 = [];
let totals = [];

for (let i = 0; i < bills2.length; i++) {
  let tip = calcTip(bills2[i]);
  tips2.push(tip);
  totals.push(tip + bills2[i]);
}

console.log(tips2);
console.log(totals);

function calcAverage2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage2(totals));

// Coding Challenge #9
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days
// ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string
// like the above to the console. Try it with both test datasets.
// Test data:
// • Data 1: [17, 21, 23]
// • Data 2: [12, 5, -5, 0, 4]

function printForecast(arr) {
  let str = "... ";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }

  console.log(str);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

//LECTURE: Destructuring of arrays and objects, Spread Operator
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publicationYear: 1925,
    rating: 4.2,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publicationYear: 1960,
    rating: 4.5,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationYear: 1937,
    rating: 4.3,
  },
];
// 1. An array books is provided, use array destructuring to extract the values into
// variables book1, book2, book3 and log to the console.

// 2. Apply object destructuring to extract title, author, published from book 2
// and log a string to the console “Book 2: To Kill a Mockingbird by Harper Lee,
// published in 1960”.

// 3. Create a new book4 object with the following details:
// 1. Title: "Harry Potter and the Sorcerer's Stone"
// 2. Author: "J.K. Rowling"
// 3. Genre: "Fantasy"
// 4. Publication Year: 1997
// 5. Rating: 4.7

// 4. Use the spread operator to add this book to the books array. Log the
// updated array to the console.

// 5. Use the spread operator to create a shallow copy of the books array named
// copiedBooks.

let [book1, book2, book3] = books;
console.log(book1, book2, book3);

let { title, author, publicationYear: published } = book2;
console.log(`Book 2: ${title} by ${author}, published in ${published}`);

let book4 = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  genre: "Fantasy",
  publicationYear: 1997,
  rating: 4.7,
};

let updatedBooks = [...books, book4];
console.log(updatedBooks);

let copiedBooks = [...books];
console.log(copiedBooks);
