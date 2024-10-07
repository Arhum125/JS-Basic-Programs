// function checkVowels(name){
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for(let i=0; i<name.length; i++){
//         if(vowels.includes(name[i].toLowerCase())){
//             count++;
//         }
//     }

//     return count;
// }

// console.log(checkVowels("Arhum"));


// Using Arrow function

let checkVowels = (name) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i=0; i<name.length; i++){
        if(vowels.includes(name[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

console.log(checkVowels("ArhumAli"));