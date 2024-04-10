//in api response mostly the result is type of array of objects

const response=[
    {name:"abc",address:"abc"},
    {name:"def",address:"def"}
]


//we can access this like below

response[1].name  // it gives us the result as def

//operations
const userDetail={name:"abc",address:"abc"}
console.log(Object.keys(userDetail))        //it returns array of keys of this object ["name","address"]

console.log(Object.values(userDetail))        //it returns array of values of this object ["abc","abc"]

console.log(Object.entries(userDetail))        //it returns array of keys and values of this object with outer array[["name":"abc"],["address":"abc"]]

//to check that the perticular property is exist or not

console.log("has own property-->",userDetail.hasOwnProperty("name"))    //returns true

console.log("has own property-->",userDetail.hasOwnProperty("phone number))    //returns false