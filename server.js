var express = require('express');
var app = express();

app.get('/', (req, res) => {
  	res.send('Hello World and shitd');
});

app.get(/./g, (req, res) => {
	console.log('requested something: ' + req.url)
	res.send({unixTimestamp: 'hello', naturalLanguageDate: 'welt'})
});

app.listen(3000, () => {
  	console.log('Example app listening on port 3000!');
});