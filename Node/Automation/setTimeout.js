// {function yolo(){
//     var a=10;
//    function cb(){
//     console.log("how Are you");
// }
// setTimeout(cb,5000);
// console.log(a);
// }

// yolo();
// let b=100;
// console.log(b);
// }



// const request=require("request");

// let url="https://www.youtube.com";
// function yolo(){
//     var a=10;
//    function cb(){
//     if(err){
//         console.log(err);
    
//     }
//     else{
//         console.log("how Are you");
//     }
    
// }
// request(url,cb);
// console.log(a);
// }

// yolo();
// let x=100;
// console.log(x);

for(var i=1;i<=10;i++){
    function outer(a){
    setTimeout(function(){
        console.log(a);
    },2000*a);
}
    outer(i);
    }




    function a(){
        let x=100;
        function y(){
            return x;
        }
        return y;
    }
    let fn=a();
    let ans=fn();
    console.log(ans);

    // let i=1;
    // while(i<10){

    // }
//it is working because of the scope of the variable i
    // for(var i=1;i<=10;i++){
    //     let a=i;
    //     setTimeout(function(){
    //         console.log(a);
    //     },2000*i);
    // }

//it is not working because of the scope of the variable i
// setTimeout(function(){
//     for(var i=1;i<=10;i++){
//         console.log(i);
//     }
// },2000);