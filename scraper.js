//Here comes the scraper.js
var request = require("request");
var cheerio = require("cheerio");
//var $ = require("jquery");
var converter = require('json-2-csv');
var http = require("http");
var url = "http://shirts4mike.com/shirts.php?id=10";
var $ = cheerio.load('<div class="shirts">...</div>');

http.get('http://shirts4mike.com/', function(response){
  const statusCode = response.statusCode;
  const contentType = response.headers['content-type'];


  // for (var i = 0; i < 8; i++) {
  //   request(url+i,function(error, response, html){
  //       console.log('error',error);
  //       console.log('response',response);
  //
  //     })
  //  }
});
var test = $('<div class="shirts"></div>').data()
console.log($);
//loop through the 8 tshirts from -> /shirts.php and Store hrefs in links
var links = [];
$('.shirts li a').each(function() {
  links.push(this.href);
  // output of links: ['http://www.google.com', 'http://www.dictionay.com']
  var href = this.href;
  // now process with the href as you wish
  console.log(this);
});

console.log(links);
  //loop again through the individual tshirts
for (i = 0 ; i<= links.length ; i++){
  //loop through the 8 tshirts and get
  request(url+i,function(error, response, html){
  console.log('error',error);
  //console.log('response',response);
  // var price = $(".shirt-details h1 .price").text();
  // console.log(price);
  // var shirtUrl = productPages[m];
  // var title = $(".shirt-details h1").text().slice(4);
  // console.log(title);
  // var imageUrl = "http://www.shirts4mike.com/" + $(".shirt-picture img").attr("src");
  //console.log(imageUrl);

},function(error){

  console.log(error);

});
};

//create an object
//convert to a csv

// converter.json2csv("array", function(error, csv) {
//     if (error) {
//       displayError(error);
//     } else {
//       console.log("Writing to csv file.");
//       var newcsvname = "./data/" + scraperDate() + ".csv";
//       fs.writeFile(newcsvname, csv, function(error) {
//         if (error) {
//           displayError(error);
//         }
//       }); // ends fs.writeFile
//     } // ends else
//   }); // ends converter
//
//   function scraperDate(){
//   //Get days, month and year
//   var dateObj = new Date();
//   var month = dateObj.getUTCMonth() + 1; //months from 1-12
//   var day = dateObj.getUTCDate();
//   var year = dateObj.getUTCFullYear();
//   }

//How can I check for a folder called data?
