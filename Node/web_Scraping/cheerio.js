const cheerio=require('cheerio');
let html=`<ul id="fruits">
<li class="apple">Apple</li>
<li class="orange">Orange</li>
<li class="pear">Pear</li>
</ul>`;
let selecttool=cheerio.load(html);
let fruitName=selecttool('.pear');
console.log(fruitName.text());
// console.log(fruitName.html());