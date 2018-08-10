var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello dev!');
});
app.get('/dev', function (req, res) {
res.send('hello, you are not on the dev route');
});

app.get('/getip', function (req, res) {
res.send(req.connection.remoteAddress);
});
app.post('/post', function (req, res) {
  res.send('POST request to the homepage')
})
//listen to port 5000
app.listen(5000, function () {
	console.log('Dev app listening on port 5000!');
});


