/* 
Dashboard:

Display a summary of the user's financial status, including total income, expenses, and balance.
*/


/* get user related data for dashboard */

const userDashboardData = async (req, res, next) => {
	try {

		const data = successResponse({

		}, 'Logged In.');
		res.status(sc.OK).json(data);
	} catch (error) {
		next(error);
	}
};



module.exports = {
	userDashboardData
}