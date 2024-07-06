/* 
Income and Expense Management:

Allow users to add, edit, and delete income and expense entries.
Categorize entries (e.g., salary, rent, groceries, entertainment).
*/


/* crud income */

const addIncome = async (req, res, next) => {
	try {

		const data = successResponse({

		}, 'Logged In.');
		res.status(sc.OK).json(data);
	} catch (error) {
		next(error);
	}
};


const updateIncome = async (req, res, next) => {
	try {

		const data = successResponse({

		}, 'Logged In.');
		res.status(sc.OK).json(data);
	} catch (error) {
		next(error);
	}
};


const deleteIncome = async (req, res, next) => {
	try {

		const data = successResponse({

		}, 'Logged In.');
		res.status(sc.OK).json(data);
	} catch (error) {
		next(error);
	}
};


const listIncome = async (req, res, next) => {
	try {

		const data = successResponse({

		}, 'Logged In.');
		res.status(sc.OK).json(data);
	} catch (error) {
		next(error);
	}
};



module.exports = {
	addIncome,
	updateIncome,
	deleteIncome,
	listIncome,
};