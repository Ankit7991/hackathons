const hs = require('http-status');


function errorResponse(error, status = hs.BAD_REQUEST) {
	return {
		message: error?.message || error || 'Something Went Wrong!',
		status,
		success: false
	}
}

function successResponse(data, message = "Success!", status = hs.OK) {
	return {
		data,
		message,
		status,
		success: true
	}
}


module.exports = {
	errorResponse,
	successResponse
}