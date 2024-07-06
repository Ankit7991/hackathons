const { successResponse } = require('../helpers/response-manager');

const routes = require('express').Router();

/* routes here */


/* test route */
routes.get('/app-test', (req, res, next) => {
	try {
		const data = successResponse({
			time: new Date().toString()
		}, 'Test Success.');
		console.log('here', data);
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
})

module.exports = routes;