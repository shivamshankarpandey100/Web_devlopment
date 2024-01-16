const request = require('request');
request("https://www.worldometers.info/coronavirus/",cb);
function cb(err, res, body){
    console.error("error",err);//give the error
    // console.log(res);//give the responce
    console.log(body);//print body
}