/**
 * 
 
    ----------------
 
	  Question One
	  
	----------------

 */

/**
 * 
 * @param {Number} x  - X coordinate of a cartesian plane
 * @param {Number} y  - Y coordinate of a cartesian plane
 * @returns {Object}  - Object containing status code,status message, coordinates and score
 */

const score  = ( x, y ) =>  {

	let status  = {
		'00' : 'Success',
		'01' : 'USER ERROR : You have an error in one of your argument types',
		'02' : 'OPERATIONAL ERROR: You have an error in your syntax'
	}

	//result object
	let result = {
		code : '00',
		status: status['00'],
		coordinates : {
			x, 
			y
		},
		score : 0
	}

	//wrap our code in a try catch in order tohandle any uncaught exceptions
	try {

		//default score is zero points
		let score = 0

		//some error handling for the arguments from the user
		if ( typeof x === 'number' && typeof y === 'number'){
			
			//Normalize the coordinates toavoid complexity reasoning about negatives
			let coordx = x < 0 ? x * -1 : x
			let coordy = y < 0 ? y * -1 : y
			
			//highscore
			if (  coordx <= 1  && coordy <= 1 ) {
				result.code   = '00'
				result.status = status['00']
				result.score  = 10
			}

			//medium score
			if ( 
				coordx > 1  && coordx <= 5 &&
				coordy > 1  && coordy <= 5
			) {
				result.code   = '00'
				result.status = status['00']
				result.score  = 5
			}

			//low score
			if ( 
				coordx > 5  && coordx <= 10 &&
				coordy > 5  && coordy <= 10
			) {
				result.code   = '00'
				result.status = status['00']
				result.score  = 1
			}
		}
		else {
			result.code   = '01'
			result.status = status['01']
			result.score  = 0
		}

	}
	catch  ( e ){
		result.code   = '02'
		result.status = `status-message: ${status['02']} , stack-trace: ${ e.stack}, error-message: ${e.message}`
		result.score  = 0		
	}

	return result
}

//export the module for use in our test library
module.exports = score