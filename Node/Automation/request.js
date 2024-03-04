const request=require("request");
let url="https://www.youtube.com";


function yolo(){
    var a=10;
   function cb(err,res,body){

    if(err){
        console.log(err);
    }
    else{
        console.log("how Are you");
        console.log(res.statusCode);
    }
}
request(url,cb);
console.log(a);
}

yolo();
let b=100;
console.log(b);