var http = require('http'); // Import the http module
var fs = require('fs'); // Import the fs module
var path = require('path'); // Import the path module

// Create an HTTP server 
http.createServer(function (req, res) {  
    // Check if the request URL is /index.html 
    if (req.url === '/index.html') { 
        // Read the index.html file
        var filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, function(err, data) { 
            if (err) {
                // If there is an error reading the file, send a 500 response
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Internal Server Error, File could not found');
                res.end();
            } else {
                // If the file is read successfully, send the contents as the response
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else {
        // If the request is not for /index.html, send a 404 response
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('The page you requested is not available');
        res.end();
    }

// The server listens on port 8080 for incoming connections
}).listen(5000, function() {
    console.log('Server is listening on port 5000');
});