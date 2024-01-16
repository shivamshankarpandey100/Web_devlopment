const request=require('request');
const cheerio=require('cheerio');

request("https://www.worldometers.info/coronavirus/",cb);
function cb(err, res, body){
    if(err){
        console.log(err);
    }
    else{
        handlerbody(body);
    }

}
function handlerbody(html){
    let selectertool=cheerio.load(html);
    let coronadetails=selectertool('.maincounter-number');
    // console.log(coronadetails.text());
    let totalnumberofcases=selectertool(coronadetails[0]).text();
    console.log("Total Number of Cases => ",totalnumberofcases);

    let totalnumberofdeaths=selectertool(coronadetails[1]).text();
    console.log("Total Number of Deaths => ",totalnumberofdeaths);

    let totalnumberofrecoveries=selectertool(coronadetails[2]).text();
    console.log("Total Number of Recoveries => ",totalnumberofrecoveries);
}

//node coronaDetails.js