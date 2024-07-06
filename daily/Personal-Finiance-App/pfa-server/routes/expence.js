const { addExpences, updateExpences, listExpences, deleteExpences } = require('../controller/expence');

const expenceRoutes = require('express').Router();

expenceRoutes.route('/').post(addExpences);
expenceRoutes.route('/:id').patch(updateExpences).delete(deleteExpences);
expenceRoutes.route('/list').post(listExpences);

module.exports = expenceRoutes;