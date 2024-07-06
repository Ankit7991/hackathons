const { login, signup } = require('../controller/authentication');

const authRoutes = require('express').Router();

authRoutes.route('/login').post(login);
authRoutes.route('/signup').post(signup);

module.exports = authRoutes;