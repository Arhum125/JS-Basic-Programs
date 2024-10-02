let score= prompt("Enter your score : ")
console.log(score);

if(score>=80 && score<=100){
    console.log("Congratulations you have got A grade.")
}
else if(score>=70 && score<=79){
    console.log("Congratulations you have got B grade.")
}
else if(score>=60 && score<=69){
    console.log("Congratulations you have got C grade.")
}
else if(score>=50 && score<=59){
    console.log("Congratulations you have got D grade.")
}
else if(score>=0 && score<=49){
    console.log("You have got F grade.")
}