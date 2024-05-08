// it takes a call back function , call back fn has no any name
//forEach doesnt return any value , it just checking or updating the existing array

const array=["js","php","java","c++"]

array.forEach(element => {

    // console.log(element);
});

/** output
js
php
java
c++
 */

// it also have the full array in parameters

array.forEach((element,index,array) => {
    // console.log(element, index, array);
});

/**
js 0 [ 'js', 'php', 'java', 'c++' ]
php 1 [ 'js', 'php', 'java', 'c++' ]
java 2 [ 'js', 'php', 'java', 'c++' ]
c++ 3 [ 'js', 'php', 'java', 'c++' ]
 */

// forEach method doesnt return any value

const values=array.forEach((element)=> {return element})

// console.log("value is-->",values)

/**value is--> undefined */

//to return values filter is used

const arr=[1,2,3,4,5,6,7,8,9,10]

const newArray=arr.filter((item)=>item>5)   //it return the values which satisfy the condition

console.log("new array is-->",newArray)

//Output is:- new array is--> [ 6, 7, 8, 9, 10 ]

//same work we can do with forEach but in below menstioned way

let anotherArray=[]

arr.forEach((num)=>
    {
        if(num>5){
            anotherArray.push(num)
        }
        })

        console.log("another array-->",anotherArray)  //output:-another array--> [ 6, 7, 8, 9, 10 ]