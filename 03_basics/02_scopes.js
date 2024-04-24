function parent(){
    const username="parent"

    function child(){
        const rollno=21

        console.log("username in side nested loop",username)        //child can access the varibles declare in parent scope, this is called clousers
    }
    // console.log("rollno in side nested loop",rollno)        //this gives us an error because rollno define inside the child scope and can't access outside from that scope
    child()
}

parent()