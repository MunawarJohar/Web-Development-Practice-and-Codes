// module
const fs=require("fs");
const text=fs.readFileSync("Lecturetext.txt","utf-8");

// console.log("The content of file is");
// console.log(text);

console.log("creating a new file ");
fs.writeFileSync("munawar.txt",text)

