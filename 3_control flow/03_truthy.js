//truthy or falsy value

// const userEmail = "Prathamesh"

// if (userEmail){
//     console.log("Got user Email");
// }
// else{
//     console.log("Don't have user email")
// }


// const userEmail = ""

// if (userEmail){
//     console.log("Got user Email");
// }
// else{
//     console.log("Don't have user email")
// }


// const userEmail = []

// if (userEmail){
//     console.log("Got user Email");
// }
// else{
//     console.log("Don't have user email")
// }


////falsy value

// false , 0 , -0, BigInt , "" , null , undefined , NaN


/////truthy value

// "0" , "false" , " " , [] , {} , function(){}



////++++++++++++++++++++++++++++++++++++

// const userEmail = []

// if(userEmail.length === 0)
// {
//     console.log("Array is empty")
// }


// const emptyObj = {}

// if(Object.keys(emptyObj).length===0)
// {
//     console.log("Object is empty")
// }



//// Nullish Coalescing Operator (??) : null undfined

// let val;
// val = 5 ?? 10
// // console.log(val)        //first print

// let val1;
// val1 =  null?? 10
// console.log(val1)           //  10


// let val2;
// val2 =  undefined ?? 10      //10
// console.log(val2)       


// let val3;
// val3 =  null?? 10 ?? 20
// console.log(val3)


//// Terniary Operator

// condition ? true : false 

//ex1 

const teaPrice =100
teaPrice<= 80 ? console.log("Less than 80") : console.log("more than 80")