//Objects de Structure

let course={
    name:"javascript in hindi",
    price:1000,
    courseInstructor:"Hitesh"
}

//we can access this using dot notation or using [] braces

// and the other way is using de structuring

let {name}=course

console.log("name of course is-->",name)        // now this name is act as a varriable and we can use it anywhere in our component or program. no need to access again and again

// and also we can assign name according to our requirement, but the main key name will always remain same as we define inside the object

let {courseInstructor : instructor}=course

console.log("instructor of course is--->",instructor)   // now this becomes our varriable and we can use it any where