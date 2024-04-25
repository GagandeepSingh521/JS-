// in normal function deleration hoisting works i.e we can call the function before its deleration


console.log(addOne(5))                   //here we call the function before its deleration , by hoisting deleration automatically move to top of the scope  //output 6

function addOne(num){
    return num+1
}



// but in below function deleration its not working , it gives an error
//here we declare a function and hold it in a varriable.

console.log(addTwo(10))             //Cannot access 'addTwo' before initialization

const addTwo=function addTwo(num){
    return num+2
}

