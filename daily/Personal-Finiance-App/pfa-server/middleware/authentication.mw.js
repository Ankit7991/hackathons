
/* validate token */
require('dotenv').config();
const {env} = process;
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
	try {
		const token = (req.headers.authorization || '').replace('Bearer ', '');
		if(!jwt.verify(token, env.SECRET_JWT)) throw new TypeError('Unauthorized');
		const auth = jwt.decode(token);
		console.log();
		req.user = auth;
		next();
	} catch (error) {
		next(error);
	}
}


module.exports = {authMiddleware};