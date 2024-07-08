const db = require("../models");

async function addExpenceType (idOrType, userId) {
	try {
		if(!isNaN(parseInt(idOrType))) {return {id: idOrType}};

		const exists = await findExpenceType({type: idOrType});
		if(exists) return exists;

		const data = await db.expence_type.create({
			type: idOrType,
			userId
		});

		return data;
	} catch (error) {
		throw new TypeError(error);
	}
};


function getExpenceType(id) {
	return db.expence_type.findById(id);
}

function findExpenceType(where) {
	return db.expence_type.findOne({where})
}



module.exports = {
	addExpenceType
}