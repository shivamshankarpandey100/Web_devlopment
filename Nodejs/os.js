const os=require("os");

//it returns the underlying architecture
let mySystemArch=os.arch();
console.log(mySystemArch);
//return information on the cpus
let myCpuInfo=os.cpus();
console.log(myCpuInfo);
//Returns the host name of the operating system as a string.
let hostName=os.hostname();
console.log(hostName);
//Returns an object containing network interfaces that have been assigned a network address.
let netInfo=os.networkInterfaces();
console.log(netInfo);
//Returns the operating system as a string.
console.log(os.release());
//Returns the total amount of system memory in bytes as an integer.
console.log(os.totalmem());
//Returns the system uptime in number of seconds.
console.log(os.uptime());
//Returns information about the currently effective user.
console.log(os.userInfo());
//Returns a string identifying the operating system platform for which the Node.js binary was compiled.
console.log(os.platform());
//Returns the operating system name as returned by uname(3).
console.log(os.type());