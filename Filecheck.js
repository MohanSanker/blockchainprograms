var fs = require('fs');

fs.exists('module.js',(exists)=>{
console.log(exists ?'Found':'Not Found');

});