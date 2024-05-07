// for in loop is iterate over both array and objects,but not on maps

const obj={
    js:"javascript",
    cpp:"C++",
    rb:"Ruby",
    py:"Python"
}

//to print keys only

for (const key in obj) {
//    console.log(key);
}

/* keys are
js
cpp
rb
py
*/

//to print values only

for (const key in obj) {
    // console.log(obj[key])
}

/* values are
javascript
C++
Ruby
Python
*/

//on array

const arr=["Java","Go","PHP"]

for (const key in arr) {
    // console.log(key);
}

/** output
 0
1
2
 */

for (const key in arr) {
    console.log(arr[key]);
}
/** output
Java
Go
PHP
 */