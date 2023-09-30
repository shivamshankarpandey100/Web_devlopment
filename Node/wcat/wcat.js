//1):->node wcat.js filepath=> display the content of a file in terminal
//2):->node wcatjs f1.txt node wcat.js f1.txt f2.txt f3.txt => display the all file content in terminal in 
//3):->node wcat file1 file2 file3 or node wcat file1
const { log } = require("console");
const fs=require("fs");
let inputArr=process.argv.slice(2);
console.log(inputArr);

let filesArr=[];
let optionsArr=[];
 //--------> placed files path in filesArr<---------
for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    //console.log(firstChar);
    if(firstChar=='-'){
        optionsArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
   
}
//console.log( "files to be read are "+filesArr);

//------------>check if all the files are present<--------------------
for(let i=0;i<filesArr.length;i++){
    let doesExist=fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("One or more File(s) Does not Exsist");
        return;
    }
}

//content reading and appending starts
let content="";
for(let i=0;i<filesArr.length;i++){
    let fileContent=fs.readFileSync(filesArr[i]);
    content+=fileContent+"\n";
}
console.log(content);

let contentArr=content.split("\n");



