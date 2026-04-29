// const accountId=183773
// let accountEmail="abc@gmail.com"
// var accountPassword="12345"
// accountCity="New Delhi"

// // accountId=2        //This is not allowed because accountId is a constant variable 
// accountEmail="xyz@gmail.com"        //can changes
// accountPassword="45678"             //can changes
// accountCity="Kolhapur"              //can changes

// console.log(accountId)
// console.table([accountId,accountEmail,accountPassword,accountCity])



////-------------------------Data Types---------------
//// Primitive

//// 7 types : String , NUmber , Boolean , null , undefined , Symbol , Bigint

// let name="Prthamesh"
// let age=20
// let score=99.9               //Number
// let isLoggedIn=false
// let state=null
// let data;                       //default it is undefined
// const bigNumber=1222222222222323n


//// Reference (Non primitive)

//Array , Objective , Function

// const arr=["ironman","hulk","Jadu","Krish"]
// let myObj={
//     name:"Prathamesh",
//     age:20
// }

// const myFunction=function(){
//     console.log("Hello,World")
// }



// number =>2 to power 53
// bigInt
// string
// boolean =>true/false
// null => standalone value
// undefind =>
// symbol =>unique

//object

// console.log(typeof "prathamesh")    //string
// console.log(typeof undefined)       //undefined
// console.log(typeof null)            //object

//-----------------------Data Conversion---------------

// let score1="99"

// console.log(typeof score1)           //string
// let valInNumber=Number(score1)
// console.log(typeof valInNumber)     //number

// //important case
// let score2="99abc"
// console.log(typeof score2)
// let valInNum=Number(score2)         //string
// console.log(typeof valInNum)        //number
// console.log(valInNum)               //NaN-Not a Number


// //"33" =>33
// //"33abc" =>NaN
// //true =>1 ;  false=>2


// let isLoggedIn=1
// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// //1 =>true ; 0=> false
// //"" =>false
// //"Prathamesh" =>true

let someNumber=25

let stringNumber=String(someNumber)
console.log(stringNumber)                   //25
console.log(typeof stringNumber)            //string



