//synchronous and blocking
//line by line execution



//Asynchronous or non blocking 
//line by line execution not guaranteed 



//call backs will fire

// const fs=require("fs");
// let text=fs.readFileSync("Lecturetext.txt","utf-8",(err,data)=>{
//     console.log(data);
// });
// console.log("This is a message")


const fs=require("fs");
const text=fs.readFileSync("Lecturetext.txt","utf-8");

// console.log("The content of file is");
// console.log(text);