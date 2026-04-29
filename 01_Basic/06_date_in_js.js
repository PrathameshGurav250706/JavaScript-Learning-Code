////***********************Date**************************** */

let myDate = new Date()

// console.log(typeof(myDate))
// console.log(myDate)                                //2026-04-29T13:25:19.280Z
// console.log(myDate.toString())                     //Wed Apr 29 2026 18:54:50 GMT+0530 (India Standard Time)    
// console.log(myDate.toDateString())                 //Wed Apr 29 2026
// console.log(myDate.toLocaleDateString())           //4/29/2026
// console.log(myDate.toLocaleString())               //4/29/2026, 6:57:31 PM

//-------------

// let myCreateDate= new Date(2005 , 10 , 28)
// console.log(myCreateDate.toDateString())                //Mon Nov 28 2005

// let newDate= new Date(2005 , 10 , 28, 5, 5)
// console.log(newDate.toLocaleString())                   //11/28/2005, 5:05:00 AM

// let newDate2 = new Date("2005-11-28")
// console.log(newDate2.toLocaleString())

// let newDate3 = new Date("11-28-2005")
// console.log(newDate3.toLocaleString())

//----------------------------

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)                //it is in milisecond

// console.log(Math.floor(Date.now()/1000))


let newOne= new Date()
// console.log(newOne.getDay())
// console.log(newOne.getMonth()+1)

// `${newOne.getDay()} and the ${newOne.getTime()}`

//----------------

newOne.toLocaleString('default',{
    weekday:"long",
})
