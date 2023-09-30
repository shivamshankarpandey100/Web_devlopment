//fs:- fs module is stands for file System module
const fs=require("fs");

let res=fs.appendFileSync("f1.txt","hello i am f1 file");
fs.appendFileSync("f1.txt","\nhello i am f2 file");//fs.appendFileSync ye file khojne or ager nahin hai to naya file
//banane or usme data likhne ke aam aati hai
console.log(res);
let data=fs.readFileSync("f1.txt","utf-8");
//ye data ya file ko read karne ka kaam karti hai or data value ko buffer me bhejti hai 
//jise samjhne ke liye next pairameter me "utf-8" padss karna padta hai jis se english me data milta hai

console.log(data);

//node use to rede data delete data ,append data theme