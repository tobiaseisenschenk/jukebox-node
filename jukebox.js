const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json());

app.post('/', function (req, res) {
  console.log('logged: ', req.body);
  res.status(200).send();
})
 
app.listen(3023);
console.info('listening on port 3023');