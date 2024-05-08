// it takes a call back function , call back fn has no any name

const array=["js","php","java","c++"]

array.forEach(element => {

    console.log(element);
});

/** output
js
php
java
c++
 */

// it also have the full array in parameters

array.forEach((element,index,array) => {
    console.log(element, index, array);
});

/**
js 0 [ 'js', 'php', 'java', 'c++' ]
php 1 [ 'js', 'php', 'java', 'c++' ]
java 2 [ 'js', 'php', 'java', 'c++' ]
c++ 3 [ 'js', 'php', 'java', 'c++' ]
 */