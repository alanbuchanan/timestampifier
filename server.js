var express = require('express');
var app = express();
var moment = require('moment')

app.get('/', (req, res) => {
  	res.send('Hello World and shitd');
});

app.get(/./g, (req, res) => {

	const inputIsUnix = url => {
		return !(/[a-zA-Z]/g.test(url))
	};

	const inputIsDate = url => {
		return false;
	}

	const url = req.url.substr(1);
	console.log('requested something: ' + url)

	var unix = 0,
		natural = '';

	if (inputIsUnix(url)) {	
		unix = Number(url);
		natural = moment(moment.unix(url)._d).format('MMMM D, YYYY')
	} 
	else if (inputIsDate(url)) {
		
		console.log('NOT VALID UNIX TIMESTAMP!')
	} 
	else {
		console.log('NOT VALID UNIX TIMESTAMP!')
		console.log('here:', moment(url, 'MMMM D, YYYY').toDate());
		unix = null;
		natural = null;
	}

	res.send({'unixTimestamp': unix, 'naturalLanguageDate': natural})
});

var port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  	console.log('Example app listening on port 3000!');
});