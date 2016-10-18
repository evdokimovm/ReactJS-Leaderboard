var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname + '/dist/')))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'))
})

var port = process.env.PORT || 8080
app.listen(port, function() {
	console.log('Node.js listening on port ' + port)
})
