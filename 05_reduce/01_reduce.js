// reduce function is used to get sum of all or to apply methods and get single value result

const course=[
    {name:"c++",price:1999},
    {name:"js",price:2999}
]

const total=course.reduce((acc,curval)=>acc+curval.price,0)  //here 0 is initial value first time pass to the acc. you can pass any other value also 3,4,5 , which means its a starting or initial value
console.log("total-->",total)

const funTotal=course.reduce(function (acc,curval){
return acc+curval.price
},0)

console.log("funTotal--->",funTotal)