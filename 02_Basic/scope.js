// a=300

// if (true){
//     let a=10
//     const b=20
//     console.log("Inner :",a)
    
// }

// console.log(a)

// console.log(b)

//-------------------------------------------

// function one(){
//     const username="Prathamesh"

//     function two(){
//         const website ="youtube"
//         console.log(username)                       //username work as a global scope
//     }

//     // console.log(website)                         //website is a local scope
//     two()
// }

// one()


//---------------------------------------------

// if (true){
//     const username="prathamesh"

//     if(username==="prathamesh")
//     {
//         const website=" youtube"
//         console.log(username+website)
//     }

//     // console.log(website)                    //error comes
// }

// console.log(username)                       //error comes

//+++++++++++++++++++ interesting +++++++++++++++++

// function addone(num){
//     return num+1
// }

// addone(10)

// const addTwo = function (num){
//     return num+2
// }

// addTwo(20)

//----

console.log(addone(10))                 //see
function addone(num){
    return num+1
}

console.log(addTwo(20))                 //see , this cannot execute
const addTwo = function (num){
    return num+2
}

