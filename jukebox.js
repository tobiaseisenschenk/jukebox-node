const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


const app = express()

app.set('view engine', 'ejs');
// eslint-disable-next-line no-undef
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res) {
    res.render('index');
});
some-invalid
app.listen(80);
console.info('listening on port 80');