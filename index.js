/*jshint esversion: 6 */
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var item = 'https://shopnicekicks.com/collections/new-arrivals-1/products/air-jordan-1-mid-multi-color-womens-lifestyle-shoe-white-multi';
function getVar(varLink) {
    var data = JSON.stringify({});
    var xhr = new XMLHttpRequest();
    var info;
    var productVar = 0;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
          info = this.responseText;
          var obj = JSON.parse(info);
          var variants = obj.product["variants"];
          while(productVar != variants.length) {
            console.log(variants[productVar].id);
            productVar = productVar + 1;
          }
          console.log("All Variants Logged.");
      }
    });
    
    
    xhr.open("GET", varLink);
    xhr.send(data);
}

getVar(`${item}.json`);

