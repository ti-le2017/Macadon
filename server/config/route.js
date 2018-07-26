var path = require('path')

module.exports = function(app){

	// REFRESHING PAGE WILL REDIRECT TO ANGULAR ROUTES
	// FIXES 'CANNOT GET /SHOP' ERROR
	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}