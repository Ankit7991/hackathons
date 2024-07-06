const { successResponse } = require('../helpers/response-manager');
const authRoutes = require('./auth');
const budgetRoutes = require('./budget');
const dashboardRoutes = require('./dashboard');
const expenceRoutes = require('./expence');
const incomeRoutes = require('./income');

const routes = require('express').Router();

/* routes here */

routes.route('/auth', authRoutes);
routes.route('/budget', budgetRoutes);
routes.route('/dashboard', dashboardRoutes);
routes.route('/expence', expenceRoutes);
routes.route('/income', incomeRoutes);


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