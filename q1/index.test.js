/**
 *  Question 1 : Darts Scoring Test Suite
 */
const score = require ( './index')

test ( 'Test if passing non-number argument types to the scoring function fails', () => {

	let result = score ( 0, 'i am a string')
	expect ( result.code ).toEqual('01')
	expect ( result.status ).toEqual('USER ERROR : You have an error in one of your argument types')
})

test ( 'Test if passing coords (0,1) results in a score of 10', () => {

	let result = score ( 0, 1)
	expect ( result.score ).toEqual(10)
})

test ( 'Test if passing coords ( 2,-4) results in a score of 5', () => {

	let result = score ( 2, -4)
	expect ( result.score ).toEqual(5)
})

test ( 'Test if passing coords ( -10,-9.2) results in a score of 1', () => {

	let result = score ( 10, -9.2 )
	expect ( result.score ).toEqual(1)
})

test ( 'Test if passing coords ( -10.1,10) results in a score of 0', () => {

	let result = score ( -10.1, 10 )
	expect ( result.score ).toEqual(0)
})