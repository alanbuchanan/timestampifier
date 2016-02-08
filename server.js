var express = require('express');
var app = express();
var moment = require('moment');
var path = require('path');

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
    res.sendFile('./html/index.html');
});

app.get('/:string', (req, res) => {

    var unix = 0,
        natural = '',
        isUnix = url => /^(|-)\d+$/g.test(url)
        dateFormat = 'D MMMM YYYY';
    // Decode and replace junk in URL
    url = decodeURI(req.params.string);

    var d = new Date(url);

    // Evaluate as UNIX timestamp
    if(isUnix(url)) {
        unix = Number(url);
        natural = moment(moment.unix(url)._d).format(dateFormat);

    } else 
    // Evaluate as date
    if (isNaN(d.getTime())) {
        // date is not valid
        unix = null;
        natural = null;
    } else {
        // date is valid
        unix = Math.round(new Date(d).getTime() / 1000);
        natural = moment(d).format(dateFormat);
    }

    res.send({'unixTimestamp': unix, 'naturalLanguageDate': natural});
});

var port = Number(process.env.PORT || 3001);

app.listen(port);