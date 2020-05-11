/*
	-----------------------------------

		TEST

	-----------------------------------
*/

const optimize = require ( '../q2/index' )

test ( 
	`Arguments:
		1. totalWeight of 10
		2. items array of value:
		[
			{ weight: 5, value: 10 }, 
			{ weight: 4, value: 40 }, 
			{ weight: 6, value: 30 }, 
			{ weight: 4, value: 50 }
		]
		 
	Result:
		1.a maximum value of 90 
		2.combinations of [ { weight: 4, value: 50 }, { weight: 4, value: 40 } ]`, 
		
		() => {

			const items      = [
				{ weight: 5, value: 10 }, 
				{ weight: 4, value: 40 }, 
				{ weight: 6, value: 30 }, 
				{ weight: 4, value: 50 }
			]
			const totalWeight = 10 
			const result      = optimize ( items, totalWeight )

			expect ( result.maximumValue ).toEqual ( 90 )
			expect ( result.combinations[0].weight ).toEqual ( 4  )
			expect ( result.combinations[0].value  ).toEqual ( 50 )
			expect ( result.combinations[1].weight ).toEqual ( 4  )
			expect ( result.combinations[1].value  ).toEqual ( 40 )
		}
)
