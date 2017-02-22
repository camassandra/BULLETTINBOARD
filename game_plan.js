repository: BULLETINBOARD
git init
npm init
install express, pug, body-parser
create .gitignore and add node_modules in it

postgreSQL 
	create database 'bulletinboard', 
	with table 'messages', w columns: post_id (serial primary key), title(text), body(text)

set environmental variables POSTGRES_USER, POSTGRES_PASSWORD in .bash_profile

create directories and files 

 views
 	home 
 		a navigation bar, with routes /home and /feeds (use template from user app)
 		a form for title + body (use 'http://materializecss.com/forms.html') 
 		a 'post' button 
 	feeds
 		a navigation bar, with routes /home and /feeds (use template from user app)
 		a heading 
 		a p. where all posts can be sent with a each loop 
 	page for successful posting 'thanks for posting' and navbar

 includes
 	CSS
 	js
 	images

create db_module
	install sequelize
	require var sequelize
	set var db as path to database /bulletinboard

	remember sync() {
		force: true
	}
	module.exports  must export {object}

create app.js
	require express and store it in var app 
	require body parser
	set milldeware and serve static files from includes
	set views and pug

	create first route 
	app.get to /  

	create second route 
	app.post on  /success 
    body parser!

	create third route showing all posts 
	app.get to /feeds  and a {object}

    




