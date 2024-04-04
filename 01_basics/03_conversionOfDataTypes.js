let score=33

console.log(typeof score); //number
console.log(typeof(score)); //number

let rollNo="33"

console.log(typeof rollNo)  //string

//to convert it into number

let inNumber=Number(rollNo)
console.log(typeof inNumber);       // number

let a="33abc"

let newNumber=Number(a)

console.log(typeof newNumber)       //number
console.log(newNumber)              //NaN

let b=33

console.log(typeof b)       //number

//convert it into String

let inString=String(b)

console.log(typeof inString)    //string
console.log(inString);          //33


//Boolean

let c=1

let inBoolean=Boolean(c)
console.log(inBoolean);     //true

//1  =>true, 0  =>false
// ""   =>false, 
//"gagan"   =>true

let d=null
console.log(typeof d);      //object
console.log(d);             //null

let inNumbertype=Number(d)      

console.log(typeof inNumbertype);   //number
console.log(inNumbertype)           //0

let e=undefined

console.log(typeof e);  //undefined
console.log(e)          //undefined

let numberType=Number(e)

console.log(typeof numberType);     //number
console.log(numberType);            //NaN
