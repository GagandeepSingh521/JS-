let myArr=[1,2,3,4,5]

let myArr2=[1,2,3,"gagan",true]     //means it contain any type of value

console.log("original array-->",myArr)

//slice and splice methods

let sliceArr=myArr.slice(1,3)

console.log("sliceArr---> ",sliceArr)       //[2,3]

console.log("original array after slice-->",myArr) // original array remains same

let spliceArr=myArr.splice(1,3)         //[2,3,4]

console.log("splice Array--->",spliceArr)   // original array change [1,5]

console.log("original array after splice --->",myArr)
