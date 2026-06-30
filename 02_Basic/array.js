//array

// const arr=[1,2,3,4,5, true , "hi"]
// console.log(arr[0])

const arr1= new Array(1,2,3,4,5)
// console.log(arr1)

//Array methods

// arr1.push(90)
// console.log(arr1)

// arr1.pop()
// console.log(arr1)

// arr1.unshift(100)           //add element at first
// console.log(arr1)           //[ 100, 1, 2, 3, 4, 5 ]

// arr1.shift()                //remove element at first
// console.log(arr1)

// console.log(arr1.includes(500))

// console.log(arr1.indexOf(900))      

//-----------------------------------

// const newArr = arr1.join()
// console.log(newArr)
// console.log(typeof newArr)

//---------------

//slice , spilce
// let a=[10,20,30,40,50]
// console.log(a.slice(2,5))           //[ 30, 40, 50 ]


let b=[10,20,30,40,50]
console.log(b.splice(3,5))              //[ 40, 50 ]
console.log(b)                          //[ 10, 20, 30 ] changes original
