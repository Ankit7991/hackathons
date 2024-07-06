const { login, signup } = require('../controller/authentication');
const { userDashboardData } = require('../controller/dashboard');

const dashboardRoutes = require('express').Router();

dashboardRoutes.route('/user-data').post(userDashboardData);

module.exports = dashboardRoutes;