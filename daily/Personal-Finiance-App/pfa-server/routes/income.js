const { addIncome, updateIncome, listIncome, deleteIncome } = require('../controller/income');

const incomeRoutes = require('express').Router();

incomeRoutes.route('/').post(addIncome);
incomeRoutes.route('/:id').patch(updateIncome).delete(deleteIncome);
incomeRoutes.route('/list').post(listIncome);

module.exports = incomeRoutes;