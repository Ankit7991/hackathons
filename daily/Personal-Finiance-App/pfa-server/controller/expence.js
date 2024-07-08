/* 
Income and Expense Management:

Allow users to add, edit, and delete income and expense entries.
Categorize entries (e.g., salary, rent, groceries, entertainment).
*/

const { successResponse } = require("../helpers/response-manager");
const db = require("../models");
const { addExpenceType } = require("../services/expence-type.sr");
const sc = require('http-status');
const { addLocation } = require("../services/location.sr");
const { findExpences } = require("../services/expence.sr");


/* crud expence */


const addExpences = async (req, res, next) => {
	try {
		const expenceType = await addExpenceType(req.body.type, req.user.id);
		const location = await addLocation(req.body.type, req.user.id);

		const expenceData = {
			amount: req.body.amount,
			time: req.body.time,
			type: expenceType.id,
			location: location.id,
			userId: req.user.id,
			paymentMode: req.body.paymentMode,
		};

		const newExpence = await db.expence.create(JSON.parse(JSON.stringify(expenceData)));

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
		const data = successResponse(await findExpences(req.body), 'Data Fetched.');
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