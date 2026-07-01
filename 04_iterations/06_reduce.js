const myNums = [1, 2, 3, 4, 5];

// myTotal = myNums.reduce(function(accumulator, currentValue){
//     console.log(`Accumulator: ${accumulator} , Current Value: ${currentValue}`)
//     return accumulator + currentValue
// }, 0)

// console.log(myTotal)  // 15

// const a= myNums.reduce((acc,curr) => acc+curr , 0)
// console.log(a)  // 15


const shoppingCart =[
    {productId: 1, price: 100, quantity: 2},
    {productId: 2, price: 200, quantity: 1},
    {productId: 3, price: 300, quantity: 3}
]

const total= shoppingCart.reduce((acc,item) => acc+ item.price, 0)
console.log(total)  // 1400