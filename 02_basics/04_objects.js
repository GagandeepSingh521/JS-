const tinderUser=new Object()   //singleton object using constructor

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

//how to combine them all

const obj4={obj1,obj2,obj3}
console.log("obj 4-->",obj4)    //but it return the nested objects, below type
// {
//     obj1: { '1': 'a', '2': 'b' },
//     obj2: { '3': 'c', '4': 'd' },
//     obj3: { '5': 'e', '6': 'f' }
//   }

//to access them into a single object using assign() method

const obj5=Object.assign({},obj1,obj2,obj3)     //{} used for the target object in which we save the new object

console.log("obj 5-->",obj5)    //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//here if we dont use the {} empty object then all the values copy to the object written at first index ii.e obj1

//but mostly we use the spread operator

const obj6={...obj1,...obj2,...obj3} // it simply return the single object