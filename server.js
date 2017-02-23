var express = require('express')
var app = express()
var mongo = require('mongodb')
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html'); // load our public/index.html file
})

app.use(express.static('/public'))
// run the node server via express (notice app.listen rather than using http.createServer. Express is handling lots of this for us.)
var port = process.env.PORT || 3000

app.listen(port, function (){
    console.log('CharteredSurvey.com is alive on ' + port)
})