const os = require("os")
//info about current user
const user = os.userInfo()
console.log(user);

//methid returns system uptime in seconds

console.log(`system runtime is ${os.uptime()} seconds`);

//return os name

const currentOs={
    namet : os.type(),
    release :os.release(),
    totalMem : os.totalmem(),
    freeMem: os.freemem()
}

console.log(`system os is : ${currentOs.namet} and the releasse is actualy ${currentOs.release} 
the total memory is ${currentOs.totalMem} and the free memory is : ${currentOs.freeMem}`);