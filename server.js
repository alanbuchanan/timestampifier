var express = require('express');
var app = express();

app.get('/', (req, res) => {
  	res.send('Hello World and shitd');
});

app.get(/./g, (req, res) => {
	console.log('requested something: ' + req.url)
	res.send({unixTimestamp: 'hello', naturalLanguageDate: 'welt'})
});

var port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  	console.log('Example app listening on port 3000!');
});