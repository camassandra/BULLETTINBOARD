
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
app.post('/searchhandler', function(request, response){
    var titlequery = request.body.searchquery
	console.log(titlequery)
	var titlequeryLowercase = titlequery.toLowerCase()
	Db.Messages.findAll()
	.then((Allposts) => {
		console.log('first post title is ' + Allposts[0].title)
		for (var i = 0; i < Allposts.length; i++) {
			var lowercasetitle = Allposts[i].title.toLowerCase()

			if (lowercasetitle.indexOf(titlequeryLowercase)> -1) {
				console.log('getting here')
				
				console.log(lowercasetitle)
				response.render('success', {postfound: Allposts[i]})
			}
			else console.log('not found')
		}
	})
});

//route to all posts
app.get('/feeds', function(request, response){
	console.log('going to feeds')
    Db.Messages.findAll()
    .then((allPosts) => {
        //console.log('logging allPosts')
        //console.log(allPosts)
        response.render('feeds', {posts: allPosts})
    })    
});




app.listen(3000, function(){
	console.log('listening on 3000 has started');
})