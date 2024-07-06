/* 
User Authentication:

Register and log in users using JWT for authentication.
*/

const { successResponse } = require("../helpers/response-manager");
const sc = require('http-status');
const db = require("../models");


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
		const body = {
			"name": req.body.name,
			"email": req.body.email,
			"password": req.body.password,
			"age": req.body.age,
			"gender": req.body.gender,
		};

		const findUser = await db.user.findOne({
			where: {
				email: body.email
			}
		});

		if(findUser) throw new TypeError('User already exists.');

		const userData = db.user.create(body);



		const data = successResponse(userData , 'Logged In.');
		res.status(sc.OK).json(data);

	} catch (error) {
		next(error);
	}
};


module.exports = {
	login,signup
}