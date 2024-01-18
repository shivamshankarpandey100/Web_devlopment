const request=require("request");
const cheerio=require("cheerio");

let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(url, cb);

function cb(err, res, html){
    if(err){
        console.log(err);
    }
    else{
        handle(html);

    }
}
function handle(html){
    let selectertool=cheerio.load(html);
    let spanelement=selectertool('span[class="ds-text-tight-m ds-font-bold ds-text-typo-primary hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block ds-block ds-text-center"]');
    console.log(spanelement);
    let relativelink=spanelement.attr("href");
    console.log(relativelink);

    let fulllink="https://www.espncricinfo.com";
}

// currentPage link=https://www.espncricinfo.com/series/ipl-2020-21-1210595
//  nextPage link=https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-schedule-fixtures-and-results
//node main.js
