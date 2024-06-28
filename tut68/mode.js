console.log("this is mode.js");
function average(arr){
    let sum=0;
    arr.array.forEach(element => {
sum+=element;
    });
    return sum/arr.length;
}
// module.exports={
//     avg :average,
//     name:"munawar",
//     repo:"GitHub"
// }

module.exports.name="munawar";