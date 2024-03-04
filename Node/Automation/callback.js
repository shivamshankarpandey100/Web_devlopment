
// printnum("hello", function(num){
//     console.log(num);
//     num++;
//     printnum('hello',function(num){
//         console.log(num);
//     num++;
//     printnum('hello',function(num){
//         console.log(num);
//         console.log("reached at end");
//         });
//     });
// })

// function printnum(hello,cb){
//     console.log("callback hell started");
//     console.log(hello);
//     var num=1;
//     cb(num)
// }

const fs=require("fs");
let data=fs.readFile("f1.txt",cb1);
function cb1(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+"");
        fs.readFile("f2.txt",cb2);
    }
}
function cb2(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+"");
        console.log("data printed");
    }
}