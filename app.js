
const fs = require('fs');
var express = require('express');
const app = express();
var bodyParser = require('body-parser')

const Db = require(__dirname +'/db_module.js')

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
	console.log('rendering homepage')
	response.render('bulletinhome')
})

//posting new message
app.post('/posthandler', function(request, response){
	var titlepostqr = request.body.titlepostqr
 Db.Messages.create({
 	title: titlepostqr,
 	body: request.body.bodypostqr
 }).then( f => {
 	response.redirect('/feeds')
 })

	
});



//just hypothetically In case you want to look up a post.... ????
// app.post('/posthandler', function(request, response){
// 	console.log('handling post')
//var titlepostqr = request.body.titlepostqr
// 	var bodypostqr = request.body.bodypostqr
// 	console.log(titlepostqr)

// 	response.render('postrender', {postfound: data[i]})
// });

//route to all posts
app.get('/feeds', function(request, response){
	console.log('going to feeds')
    Db.Messages.findAll()
    .then((allPosts) => {
        console.log('logging allPosts')
        //console.log(allPosts)
        response.render('feeds', {posts: allPosts})
    })    
});




app.listen(3000, function(){
	console.log('listening on 3000 has started');
})