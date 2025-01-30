var http = require('http');

http.createServer(function (req, res) {
    res.write('Hellow World');
    res.end();

}).listen(5000);