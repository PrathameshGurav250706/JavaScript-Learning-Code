// Immediately Invoked Function Expression (IIFE)

// (function data(){
//     console.log("DB connected")
// })()
// op- DB connected

//-----------------------
(function data(){
    // named IIFEE
    console.log("DB connected") 
})();                               //here are two IIFE so ';' is required

((name) =>{
    console.log(`DB connected to ${name}`)
})("Prathamesh")

