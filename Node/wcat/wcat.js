//1):->node wcat.js filepath=> display the content of a file in terminal
//2):->node wcatjs f1.txt node wcat.js f1.txt f2.txt f3.txt => display the all file content in terminal in 
//3):->node wcat file1 file2 file3 or node wcat file1
const { log } = require("console");
const fs = require("fs");
let inputArr = process.argv.slice(2);
console.log(inputArr);

let filesArr = [];
let optionsArr = [];
//--------> placed files path in filesArr<---------
for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    //console.log(firstChar);
    if (firstChar == '-') {
        optionsArr.push(inputArr[i]);
    }
    else {
        filesArr.push(inputArr[i]);
    }

}
//console.log( "files to be read are "+filesArr);

//------------>check if all the files are present<--------------------
for (let i = 0; i < filesArr.length; i++) {
    let doesExist = fs.existsSync(filesArr[i]);
    if (!doesExist) {
        console.log("One or more File(s) Does not Exsist");
        return;
    }
}

//content reading and appending starts
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\r\n";
}
console.log(content);

let contentArr = content.split("\r\n");
console.table(contentArr);


//check if -s is present or not
let isSPresent = optionsArr.includes("-s");
if (isSPresent) {
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        }
        else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    let temArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] !== null) {
            temArr.push(contentArr[i]);
        }
    }
    console.log("Data After removing Extera Line \n" + temArr);
}

let indexOfN = optionsArr.indexOf("-n");
let indexOfB = optionsArr.indexOf("-b");
//if -n or -b not found ,-1 is returned
let finalOption = "";
//If both -b and -n is present
if (indexOfN != -1 && indexOfB != -1) {

    if (indexOfN < indexOfB) {
        finalOption = "-n";
    }
    else {
        finalOption = "-b";
    }
}
//either -n is present or -b is present
else {
    if (indexOfN != -1) {
        finalOption = "-n";
    }
    else if (indexOfB != -1) {
        finalOption = "-b";
    }
}

//calling of function by evaluating finalOptions

if (finalOption == "-n") {
    modifiContentByN();
}
else if (finalOption == "-b") {
    modifiContentByB();
}

function modifiContentByN() {
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = (i + 1) + ") " + contentArr[i];
    }
}
console.log(contentArr);

function modifiContentByB() {
    let count = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            contentArr[i] = count + ") " + contentArr[i];
            count++;
        }
    }
}


