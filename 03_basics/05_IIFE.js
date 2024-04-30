// IIFE : immidiate invoked function expression
//function excecte immidiate after its deleration

// 1. Named Iffe, name is chai.
(function chai(){
    console.log(`DB CONNECTED`);
})();

// ; semicolon is used at the end if here is another iffe in the same code
// ; indicates the IIFE that here is the end of IIFE i.e here is to stop the context
// otherwise here is IIFE just start the context and it dont have any idea where to stop the execution

// 2. Un Named IIFE , for this Arrow functions are used

(()=>{console.log(`DB CONNECTED`);})();  // without ; it gives an error

//here we can also paas the parameters in iIFE

((name)=>{console.log(`My name is ${name}`)})("Gagan")   //out put ;- My name is Gagan

