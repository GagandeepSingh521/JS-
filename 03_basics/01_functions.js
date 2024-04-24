function numbers(...num){       //...num called a spread operators
    return num
}

console.log(numbers(200,300,400))   //it returns an array , [200,300,400]


//----------------

const user={
    username:"Gagan",
    rollno:21
}

function objectReturn(anyObject){
    console.log(`${anyObject.username}`)
}

objectReturn(user)      //calling the function by passing the arguments