let arr1=["shaktiman","spiderman","tellyTobbies"]

let arr2=["marvel","superman","ironman"]

//push method , it directly insert the array as an element into anther array

// arr1.push(arr2)

// console.log("after push method-->",arr1)//["shaktiman","spiderman","tellyTobbies",["marvel","superman","ironman"]]

//so to merget 2 array concat method can be used , it returns the mew array

let arr3=["shevi","sukhi"]

let concatArr=arr1.concat(arr2,arr3)

// console.log("concat Array-->",concatArr)    //["shaktiman","spiderman","tellyTobbies","marvel","superman","ironman","shevi","sukhi"]        // it returns this type of output

//but in normally we prefer to use here the spread operator

let spreadArr=[...arr1,...arr2,...arr3]

console.log("spread Array-->",spreadArr)

//if there is array with in array

let nestedArray=[1,2,3,4,5,[6,7,[8,9,0]]]

//we can convert it into single array using flat method and save into new array, without effecting original array

let realArray=nestedArray.flat(Infinity)

console.log("realArray-->",realArray)

console.log("old nested array-->",nestedArray)

//sometime data is not in array type so we can check it or we can convert it into array

//chekin that the data is in array format or not

let name="Gagan"

console.log("check data is of array type or not-->",Array.isArray(name))    //output: false

//now converting a string into Array

console.log("converting string to an array-->",Array.from(name))

//problem in objects , here we need to specify that to whom to be converted in array , keys or values

console.log("converting objects into array-->",Array.from({name:"Gagan"}))  // rturn empty array []

//so here we need to specify that to convert keys or values into array


let score1=100
let score2=200
let score3=300

console.log("convert multiple varriables into array -->",Array.of(score1,score2,score3))