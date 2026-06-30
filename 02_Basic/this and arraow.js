const user={
    username: "prathamesh" ,
    price: 999 ,

    weelcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)        //refer to current context

        console.log(this)
    }
}

// user.weelcomeMessage()

// user.username = "Sam"
// user.weelcomeMessage()



// console.log(this)
//{}    on terminal
//Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}     on browser



////++++++++++++++++++++++++++++++++++++++++++++++

// function show(){
//     let username = "Prathamesh"
//     console.log(this.username)              //give undefined , because this only work in object
// }

// show()

// const data = function(){
//     let username = "Prathamesh"
//     console.log(this.username) 
    
// }

// data()


//++++++++++++++++++++++++++++++++++++
// const data = () =>{                 //arrow function
//     let username = "Prathamesh"
//     console.log(this.username) 
    
// }
// data()

////Example 1
// const addTwo = (numm1, num2)=> {
//     return numm1+num2
// }
// console.log(addTwo(10,20))


//------- Implicity return
// const addTwo = (numm1, num2) => numm1+num2

// const addTwo = (numm1, num2) => (numm1+num2)

const addTwo = (numm1, num2) => ({username : "Prathamesh"})             //here parenthesis required for object

console.log(addTwo(10,20))