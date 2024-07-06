/* 
User Authentication:

Register and log in users using JWT for authentication.
*/

const { successResponse } = require("../helpers/response-manager");
const sc = require('http-status');


/* login */
const login = async (req, res, next) => {
	try {
		const data = successResponse({

		}, 'Logged In.');
		res.status(sc.OK).json(data);
	} catch (error) {
		next(error);
	}
}

/* signup */

const signup = async (req, res, next) => {
	try {

	} catch (error) {
		next(error);
	}
};


module.exports = {
	login,signup
}