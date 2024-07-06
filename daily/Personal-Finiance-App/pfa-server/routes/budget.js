const { setBudget } = require('../controller/budget');

const budgetRoutes = require('express').Router();

budgetRoutes.route('/set').post(setBudget);

module.exports = budgetRoutes;