
const fs = require('fs');
var express = require('express');
const app = express();
var bodyParser = require('body-parser')

const db = require(__dirname +'/db_module.js')

//here comes the middleware stuff!

app.use(express.static(__dirname+'/includes')) 

//bodyparser here
app.use(bodyParser.urlencoded({extended: true}))

//set engine view as pug

app.set('views', __dirname+'/views');
app.set('view engine', 'pug');


// pg.connect(connectionString, function(err, client, done) {

// }

app.get('/', function(request, response){
	response.render('bulletinhome')
})

//route to 
app.get('/feeds', function(request, response){
    db.findAll()
    .then((allPosts) => {
        console.log('logging allPosts')
        console.log(allPosts)
        response.send({posts: AllMessages})
    })    
})




app.listen(3000, function(){
	console.log('listening on 3000 has started');
})