//entry point of my command line

let helpFun=require("./commands/help");
//console.log(helpFun.help());
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
        console.log("organize function executed"+path);
        break;
    case "help":
        //call help function
        helpFun.help();
       // console.log("help function executed");
        break;
    default:
        console.log("This kind of Syntex command does not exist");
        break;
}