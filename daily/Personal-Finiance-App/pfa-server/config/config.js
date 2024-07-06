require('dotenv').config();
const { env } = process;

const config = {
	"development": {
		"username": env.DB_USERNAME,
		"password": env.DB_PASSWORD,
		"database": env.DB_NAME,
		"host": env.DB_HOST,
		"dialect": "mysql",
		"logging": true,
		freezeTableName: true
	}
};


module.exports = config;