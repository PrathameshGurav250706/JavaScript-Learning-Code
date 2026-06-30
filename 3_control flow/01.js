//if 

// < , > , <= , >= , == , !=

// if (2 === "2"){
//     console.log("Executed")
// }


////if else

// temp=41
// if( temp ===40){
//     console.log("Less than 50")
// }
// else{
//     console.log("Greater than 50")
// }

//-------------

// const score=200

// if (score >100)
// {
//     const power = "Fly"
//     console.log(`User power : ${power}`)
// }

// console.log(`User power : ${power}`)        //give problem because of scope


/////++++++++++++++++++ short hand notation

// const balance = 1000
// if (balance > 500 ) console.log("confirm")

////--------------------------------------------

// if(condition1){
//     statement
// }
// else if(condition 2){
//     statement
// }
// else if(condition){
//     statement
// }
// else{
//     statement
// }

////Application 1
// const userLoggedIn = true
// const debitcard = true

// if(userLoggedIn && debitcard){
//     console.log("Allow to buy courses")
// }

//Application 2
const userLoggedFromGoogle =true
const userLoggedFromEmail = true
if(userLoggedFromEmail || userLoggedFromGoogle)
{
    console.log("User logged in")
}

