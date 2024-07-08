const db = require("../models");

const getExpence = id => {
	return db.expence.getById(id);
}


const findExpences = searchOrfilter => {
	return db.expence.findAndCountAll({
		limit: 10
	});
}




module.exports = {
	getExpence,
	findExpences
}