//for of loop
// iterate over array, maps ,but not on objects

const arr=[5,10,15,20,25,30]

for (const iterator of arr) {
    // console.log(`values is ${iterator}`);
    
}
/*
values is 5
values is 10
values is 15
values is 20
values is 25
values is 30
*/

// for maps

const map=new Map()

map.set("In","INDIA")
map.set("Pk","Pakistan")
map.set("Fr","France")

for (const key of map) {

// console.log(key);
    
}
/*
[ 'In', 'INDIA' ]
[ 'Pk', 'Pakistan' ]
[ 'Fr', 'France' ]
*/

for (const [key,values] of map) {
 console.log(`key is ${key} :- ${values}`);   
}

/*
key is In :- INDIA
key is Pk :- Pakistan
key is Fr :- France

*/