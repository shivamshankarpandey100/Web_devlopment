//entry point of my command line
let orgFunc=require("./commands/organize");
let helpFunc=require("./commands/help");
//console.log(helpFun.help());
// let srcPath = "E:/Dev-MERN/Web_devlopment/Node/fileOrganizer/downloads";

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
switch(command){
    case "tree":
        //call tree function
        console.log("tree function executed"+path);
        break;
    case "organize":
        //call organize function
        orgFunc.organize(path);
        // console.log("organize function executed"+ " "+path);
        break;
    case "help":
        //call help function
        helpFunc.help();
       // console.log("help function executed");
        break;
    default:
        console.log("This kind of Syntex command does not exist");
        break;
}