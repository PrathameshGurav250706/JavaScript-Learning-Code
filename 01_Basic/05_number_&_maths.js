//**************************Number************** */

// const score=100
// const balance = new Number(100)

// console.log(score)              //100
// console.log(balance)            //[Number: 100]

// console.log(balance.toString().length)
// console.log(balance.toFixed(6))             //100.000000

//---------

// const number1= 250706.281105
// console.log(number1.toPrecision(8))

//-----------

// const num1=10000000000000
// console.log(num1.toLocaleString())                      //10,000,000,000,000
// console.log(num1.toLocaleString('en-In'))              //1,00,00,00,00,00,000


////*********************MAths******************* */

// console.log(Math)
// console.log(Math.abs(-4))           //convert -ve to +ve


// console.log(Math.round(2.3))
// console.log(Math.ceil(2.3))
// console.log(Math.floor(2.9))

// console.log(Math.min(1,2,3,4,5))
// console.log(Math.max(1,2,3,4,5))

////-------------------------------------------

// console.log(Math.random())              //gives random value betn 0 to 1

// console.log((Math.random()*10)+1)              

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)) +min)