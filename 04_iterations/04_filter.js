////++++++++++++++++++ filter ++++++++++++++++++////
const nums = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]

// const NewNums = nums.filter( (num) => num>4)
// console.log(NewNums)  // [5, 6, 7, 8, 9, 10]


// const NewNums = nums.filter( (num) => {
//     return num>4
// })
// console.log(NewNums)  // [5, 6, 7, 8, 9, 10]


// const newNums =[]
// nums.forEach((num) =>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)  // [5, 6, 7, 8, 9, 10]


////Application of filter

const books = [
    { title:"Book1" , genre:"Fiction" , publish:1981 , edition:2004},
    { title:"Book2" , genre:"Non-Fiction" , publish:1990 , edition:2005},
    { title:"Book3" , genre:"Fiction" , publish:1985 , edition:2000} ,
    { title:"Book4" , genre:"Non-Fiction" , publish:2000 , edition:2006},
    { title:"Book5" , genre:"Fiction" , publish:1995 , edition:2010},
    { title:"Book6" , genre:"Non-Fiction" , publish:2005 , edition:2016},
    { title:"Book7" , genre:"Fiction" , publish:2010 , edition:2018},
    {
    title:"Book8" , genre:"Non-Fiction" , publish:2015 , edition:2020
    }
];

let  userbook = books.filter((bk) => bk.genre ==="Fiction" )

userbook = books.filter((bk) => {
    return bk.publish >=2000 && bk.genre ==="Fiction"
})

console.log(userbook)
