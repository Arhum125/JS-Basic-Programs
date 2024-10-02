let fruits = ["apple","banana","orange"];
let veggies = ["potato", "tomatoes", "peas"];

console.log(fruits);
console.log(veggies);

// Adding an item at the end of an array
fruits.push("watermelon", "grapes"); 
console.log(fruits);

// Removing an item at the end of an array
veggies.pop();
console.log(veggies);

//Conver to string
console.log(`${fruits.toString()} \n${veggies.toString()}`);

// Adding an item at the start of an array
veggies.unshift("carrot");
console.log(veggies);

// Removing an item at the start of an array
console.log(`deleted ${fruits.shift()}`);
console.log(fruits);

// Adding items at a specific index
fruits.splice(1,0,"kiwi");
console.log(fruits);

// Merging two arrays
let fruitsAndVeggies = fruits.concat(veggies);
console.log(fruitsAndVeggies);

// Sorting the array
fruitsAndVeggies.sort();
console.log(fruitsAndVeggies);

// Checking if an item exists
console.log(fruitsAndVeggies.includes("potato"));

