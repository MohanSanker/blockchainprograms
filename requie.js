var fs = require("fs");

var createStream = fs.createWriteStream("Demo.txt");
createStream.end();