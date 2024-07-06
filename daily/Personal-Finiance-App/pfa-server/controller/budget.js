/* 
Budgeting:

Enable users to set monthly budgets for different categories.
Show progress against the budget with visual indicators (e.g., progress bars).
*/


const setBudget = async (req, res, next) => {
	try {

		const data = successResponse({

		}, 'Logged In.');
		res.status(sc.OK).json(data);
	} catch (error) {
		next(error);
	}
};


module.exports = {
	setBudget
}