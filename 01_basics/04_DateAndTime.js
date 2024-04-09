let myDate=new Date()

console.log("current date-->",myDate)       // in date  2024-04-08T02:05:52.301Z

console.log("to Date String-->",myDate.toDateString())      //in date Mon Apr 08 2024

console.log("date now-->",Date.now())       //convert into miliseconds 1712541952324

console.log("to locale string-->",myDate.toLocaleString())      //  08/04/2024, 7:38:51 am

console.log("to locale date string-->",myDate.toLocaleDateString())     //   08/04/2024

console.log("get time",myDate.getTime())        // time in miliseconds 1712542425388

//*************to provide our custom date******* */

console.log("insert custom date-->",new Date(2024,0,21))    // month array starts from 0 ,indicates for Jan

console.log("to locale string-->",myDate.toLocaleDateString())  //output : 4/9/2024

console.log("to default-->",myDate.toLocaleDateString('default',{weekday:"long"}))  //output: Tuesday