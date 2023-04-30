//var has some problem
var r="hello world";
console.log(r);
//There r variable is re_declearation
 r=100;
console.log(r);

//then the resolvemthe problem of var we can use let 
let l="shivam";
console.log(l);

// let l="shivam";
// console.log(l);
console.log(r);
//we can reinitialize a variable but we can not re decclear it 

//2nd problem with var
//loop
var num=10;
for(var i=0;i<=num;i++){
    if(i%2==0){
        console.log(i+"number is even");
    }
    
}
// var key is the function scoped in case of function 
// let key is the blocked scoped 
//var is used for globaley declearation
// and let key word is  used for local declearation








