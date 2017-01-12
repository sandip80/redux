var static = require('node-static')
var port = process.env.PORT || 8080
var http = require('http')


var file = new static.Server('./public', {
    cache: 3600,
    gzip: true
})

http.createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response)
    }).resume()
}).listen(port, function() {
    console.log("App is listening on port " + port)
})