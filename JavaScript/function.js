// //this the function file
// //in javaScript ther is three type of function

// function add(a,b){
//     return a+b;

// }
// let b=add(4,6);
// console.log(b);
function calculator(str,a,b){
if(str=="add"){
    return function add(){
        console.log (a+b);
    }
}
else if(str=="sub"){
    return function sub(){
        console.log (a-b);    }
}

}
let i=calculator("sub",5,3);
i();
// for invoking the function and call the function which stored in the variable use "()" 
var sayHi=function(){
    console.log("hello gyse iam the function Exprssion");
}

sayHi();
//revoke function means jab variable me function aa jaye to uske aage small bracket laga kar usko run kar dete hai jis se function chal jata hai


// home work sub add multiplication div


//third typr of function is IIFE 
let r= (function add(a,b){
    return a+b;
})(5,4);
//console.log(r(5,4));
console.log(r);




