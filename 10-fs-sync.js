const {readFileSync, writeFileSync}= require ('fs')
console.log("start");
const first = readFileSync("./content/first.txt","utf8")
const second = readFileSync("./content/second.txt","utf8")

console.log(first , "\n",second );

writeFileSync("./content/result-sync.txt",`Here is the result : ${first},"\n",${second},"\n"`,{flag: 'a'})


console.log("finishing current task");
console.log("startingthe next task");