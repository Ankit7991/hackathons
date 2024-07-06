const db = require("../models");

async function addExpenceType (idOrType, userId) {
	try {
		if(typeof parseInt(idOrType) === 'number') {return await getExpenceType()};


		const data = await db.expence.create({
			type: idOrType,
			userId
		});

		return data;
	} catch (error) {
		throw new TypeError(error);
	}
};


function getExpenceType(id) {
	return db.expence.findById(id);
}





module.exports = {
	addExpences
}