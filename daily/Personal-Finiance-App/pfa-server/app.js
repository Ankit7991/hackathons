require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const hs = require('http-status');
const { errorResponse } = require('./helpers/response-manager');
const routes = require('./routes');
const {env} = process;

const app = express();

/* 3rd party */
app.use(bodyparser.json({}));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


/* routes/versioning */
app.use('/', routes);


/* error handling */
app.use((err, req, res, next) => {
	console.log('here too');

	if(err) {
		res.status(hs.BAD_REQUEST).json(errorResponse(err));
	}
})

app.listen(env.PORT, () => {
	console.log(`🆙🏃‍♀️ Server Up and Running on port ⚓ ${env.PORT} ⚓`);
})