const user={
    username:"Gagan",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to our website`)     //this refere to only this scope or context or values of inside this {}
        console.log(this);
    }
}

user.welcomeMessage() //calling the function of user object

//output 1st console :->Gagan, welcome to our website
//output 2nd console :->
// {
//   username: 'Gagan',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

//now when we change the context

user.username="Sam"

//now again calling the function

user.welcomeMessage()      //now the output for this method calling is below 

//output 1st console :->Sam, welcome to our website
//output 2nd console :->
// {
//   username: 'Sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }


function chai(){
    console.log(this)       // it return numbers of thing like global etc....

    //but

    let username="gagan"
    console.log(this.username); //it returns undefined, this is not working inside the function scope, its just working for object scope
}