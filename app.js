const sequelize = require('sequelize');
const fs = require('fs');
var express = require('express');
const app = express();


//here comes the middleware stuff!

app.use(express.static(__dirname+'/includes')) 

//bodyparser here
//app.use(bodyParser.urlencoded({extended: true}))

app.set('views', __dirname+'/views');
app.set('view engine', 'pug');

var connString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';
// pg.connect(connectionString, function(err, client, done) {

// }

app.get('/', function(request, response){
	response.render('bulletinhome')
})



app.get('/feeds', function(request, response){
	response.render('feeds')
})





app.listen(3000, function(){
	console.log('listening on 3000 has started');
})