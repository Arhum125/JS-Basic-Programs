let marks =[80,95,84,97,67]

let sum = 0
for(let val of marks){
    sum += val;
}
console.log(sum);
let avg = sum/marks.length

console.log(`Average marks are ${avg}`)