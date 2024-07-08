/* 
User Authentication:

Register and log in users using JWT for authentication.
*/

require('dotenv').config();
const { successResponse } = require("../helpers/response-manager");
const sc = require('http-status');
const db = require("../models");
const jwt = require('jsonwebtoken');
const {env} = process;


/* login */
const login = async (req, res, next) => {
	try {
		const findUser = await db.user.findOne({
			where: {
				email: req.body.email,
				password: req.body.password,
			}
		});

		if(!findUser) throw new TypeError('Unauthorized');
		
		const token = jwt.sign({ id: findUser.id }, env.SECRET_JWT);

		const data = successResponse({
			token,
			user: findUser
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



		const data = successResponse(userData , 'Signed Up.');
		res.status(sc.OK).json(data);

	} catch (error) {
		next(error);
	}
};


module.exports = {
	login,signup
}