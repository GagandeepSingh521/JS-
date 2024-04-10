//Singleton , when object created through constructor then its called as constructor

// Object.create={}  method is used to create the object

// with object literals

const user={}  // this method is called object literals

const jsUser={
    name:"Gagan",           // name key is not in double quotes but it by default assume it as in quotes
    email:"gagan@google.com",
    "full name":"Gagandeep Singh"           //when there is spaces in key  then use double quotes
}

// how to access the values of an object 

//1. by dot notation

// jsUser.email,

//2. by using  square braces

// jsUser["full name"]      // full name has spaces in between , so it cant access by using dot notation.


// how to define a symbol in objects

const mySym1=Symbol("key1")

const mySym2=Symbol("key2")

const jsUser2={
    name:"Gagan",

    mySym1:"new key 1",     //this is considered as normal key string
    [mySym2]:"new key 2"     // this is considered as the symbol
}

console.log(jsUser2)        //output -->{ name: 'Gagan', mySym1: 'new key 1', [Symbol(key2)]: 'new key 2' }