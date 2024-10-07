//forEach loop

// let arr = [1,2,3,4,5,6]
// arr.forEach((val) => {
//     console.log(`Square of ${val} = ${val*val}`) 
// })


//arr.map method

let num = [1,2,3,4,5,6,7,8];

let newArr = num.map( (val) => {
 return val*2;
})
console.log(num);
console.log(newArr);

//Array.filter method

let values = [1,2,3,4,5,6,7,8,9,10];

let filteredArr = values.filter( (val) => {
 return val % 2 === 0;
})
console.log(values);
console.log("Prime numbers in the given array are", filteredArr);

//Array.reduce method

let arr=[2,4,6,8];

let sum = arr.reduce( (res, curr) => {          // it has two parameters which is the result i.e previous   
    // return res + curr;                          // value and the current value                 
    return res > curr ? res : curr ;
})
console.log(sum);