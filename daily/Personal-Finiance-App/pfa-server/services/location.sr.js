const db = require("../models");

async function addLocation(idOrLocation, userId) {
	try {
		console.log(`::>`, idOrLocation, userId, parseInt(idOrLocation), NaN === NaN);
		if (!isNaN(parseInt(idOrLocation))) { return { id: idOrLocation }; };

		const exists = await findLocation({ address: idOrLocation });
		console.log({ exists });
		if (exists) return exists;

		const data = await db.location.create({
			address: idOrLocation,
			userId
		});

		return data;
	} catch (error) {
		throw new TypeError(error);
	}
};


function getLocation(id) {
	return db.location.findById(id);
}

function findLocation(where) {
	return db.location.findOne({ where });
}



module.exports = {
	addLocation,
	getLocation,
	findLocation
};