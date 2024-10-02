let price = [250,645,300,900,50];

//METHOD 1 using for-of loop:

// console.log(price)
// let i = 0;
// for (let val of price){
//     console.log(`Value before discount at ${i}=${val}`)
//     let offer = val/10;
//     price[i]=price[i]-offer;
//     console.log(`Value after 10% discount ${price[i]}`);
//     i++;
// }

//METHOD 2 using for loop:
for (let i = 0; i < price.length; i++){
    let offer = price[i]/10;
    price[i]=price[i]-offer;
    console.log(`Value after 10% discount at ${i}=${price[i]}`);
}