var str="hello world";
console.log(str);
console.log(str[4]);
console.log(str.length);
//string method
//1.Extraction method

//slice method
let slicedstr=str.slice(2,5);
console.log(slicedstr);
console.log(str);
console.log(str.slice(6,str.length));
console.log(str.slice(6,str.length-1));
console.log(str.slice(6));
console.log(str.slice(0));
console.log(str.slice(6,11));
console.log(str.slice(0,-4));
//subString method
let ans=str.substr(2,11);
console.log(ans);
console.log(str);
//replacing

//to lower case
let str1="YOLO";


console.log(str1.toLowerCase());
//to Upper case
var str2="lowo";
console.log(str2.toUpperCase());


//concatination method 
let firstStr="hey ";
let secondStr="how are you";
let concatenatedStr=firstStr+secondStr;
console.log(concatenatedStr);

//trim method 
//trim method removed white spaces 
let trimstr="     hello world       ";
console.log(trimstr.trim());

