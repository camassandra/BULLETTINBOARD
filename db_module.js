const Sequelize = require('sequelize');
const db = new Sequelize ('postgres://postgres:' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard');

const Messages = db.define('messages', {
	title: {
      type: Sequelize.STRING,
      allowNull: false
    },
	body: {
	type: Sequelize.STRING,
	allowNull: false
	}
}) 
db.sync({
	force: true
})
.then(function(postparameters){
	const postOne = {
		title: 'rainy days',
		body: 'how I hate rainy days, all is gloomy',
	}

	const postTwo = {
		title: 'sunny days',
		body: 'I love Amsterdam on sunny days!',
	}

	const postThree = {
		title: 'good advice Maori',
		body: 'turn your face to the sun, and the shadows will fall behind you',
	}
	Messages.create(postOne)
	Messages.create(postTwo)
	Messages.create(postThree)
})
.catch((error) => console.log(error));

module.exports = {
	db: db,
	AllMessages: Messages
}