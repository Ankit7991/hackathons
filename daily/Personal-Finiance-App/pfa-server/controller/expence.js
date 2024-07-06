/* 
Income and Expense Management:

Allow users to add, edit, and delete income and expense entries.
Categorize entries (e.g., salary, rent, groceries, entertainment).
*/

const { successResponse } = require("../helpers/response-manager");
const db = require("../models");


/* crud expence */


const addExpences = async (req, res, next) => {
	try {
		const expenceData = {
			amount: req.body.amount,
			time: req.body.time,
			type: req.body.type,
			location: req.body.location,
			userId: req.user.id,
			paymentMode: req.body.paymentMode,
		};

		if()
		

		const newExpence = db.expence.create(JSON.parse(JSON.stringify(expenceData)));

		const data = successResponse(newExpence, 'Logged In.');
		res.status(sc.OK).json(data);
	} catch (error) {
		next(error);
	}
};


const updateExpences = async (req, res, next) => {
	try {

		const data = successResponse({

		}, 'Logged In.');
		res.status(sc.OK).json(data);
	} catch (error) {
		next(error);
	}
};


const deleteExpences = async (req, res, next) => {
	try {

		const data = successResponse({

		}, 'Logged In.');
		res.status(sc.OK).json(data);
	} catch (error) {
		next(error);
	}
};


const listExpences = async (req, res, next) => {
	try {

		const data = successResponse({

		}, 'Logged In.');
		res.status(sc.OK).json(data);
	} catch (error) {
		next(error);
	}
};



module.exports = {
	addExpences,
	updateExpences,
	deleteExpences,
	listExpences,
};