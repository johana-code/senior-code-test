/*
	-----------------------------------

		0/1 Knapsack Optimization 
		    problem

	-----------------------------------
*/
const optimizeValue =  ( items, totalWeight ) => {

	let rowLength      = items.length + 1
	let columnLength   = totalWeight + 1
	let matrix         = []
	let selectedMatrix = []

	/*
		create a 2 dimensional matrix for computation with the 
		0/1 Knapsack Optimization problem formula i.e

		Viw = max { V[i-1, w ], V[ i-1,w - wi ] + pi}

		where 
			i  = item index
			w  = weight ( column weight )
			wi = weight ( item weight )
			pi = price/value ( item value )

		//calculation with table below

								0   1   2   3   4   5   6   7   8   9   10  <-- weight

		value   weight     0    0   0   0   0   0   0   0   0   0   0   0
		10      5          1    0   
		40 	    4          2    0   
		30 	    6          3    0   
		50 	    4          4    0 				

		NB: rows correspond to the weight of the item index
			columns correspond to the current weight within totalWeight
	*/
	//Initialize our 2 dimensional matrix of length [0][0] to [ rowLength][columnLength]
	for ( let rowIndex = 0; rowIndex < rowLength;  rowIndex ++ ){

		matrix         [ rowIndex ] = []
		selectedMatrix [ rowIndex ] = []

		for ( let columnIndex = 0; columnIndex < columnLength; columnIndex ++ ) {
			matrix         [ rowIndex ][ columnIndex ] = 0
			selectedMatrix [ rowIndex ][ columnIndex ] = 0
		}

	}

	//get all the weights and values in an array
	let weights = items.map ( (item) => { return item.weight })
	let values  = items.map ( (item) => { return item.value  })


	//loop through each of our indexes in our multidimensional array according to the formula
	for ( let rowIndex = 0; rowIndex < rowLength; rowIndex ++ ) {

		for ( let columnIndex = 0; columnIndex < columnLength ; columnIndex ++ ) {

			/**
			 * According to the formula, the rows of index zero and column of index 0 should have a value of zero in the 2 dimensional matrix, 
			 * hence:
			 */
			if ( rowIndex === 0 || columnIndex === 0 ){
				matrix [ rowIndex ][ columnIndex ] = 0
			}
				   
			// If the item index and row index are not zero, we can get the current highest value and compare with the previous highest value
			else if ( weights [ rowIndex - 1 ] <= columnIndex ) { //means that the weight can be contained in the table as it is less than or equal to the maximum weight ( columns length)
				
				let currentValue  = values [ rowIndex - 1 ] + matrix [ rowIndex - 1 ][ columnIndex - weights [ rowIndex - 1 ] ]
				let previousValue = matrix [ rowIndex - 1 ][ columnIndex]

				//get the maximum value
				if (  currentValue >  previousValue ) {
					matrix         [ rowIndex ][ columnIndex ] = currentValue	
					selectedMatrix [ rowIndex ][ columnIndex ] = 1
				}
				else {
					matrix         [ rowIndex ][ columnIndex ] = previousValue
					selectedMatrix [ rowIndex ][ columnIndex ] = 0
				}

				
			}
			//weight is max hence cannot be contained in the matrix, thus we set max to the previos value
			else {
				matrix [ rowIndex ][ columnIndex ] = matrix [ rowIndex - 1 ][ columnIndex ]
			}
		}
	}


	//get the combinations for the maximum value
	let maximumValue =  matrix [ items.length ][ totalWeight ]
	let combinations = []	
	let columnIndex  = totalWeight
	let rowIndex     = items.length

	for ( rowIndex; rowIndex > 0; rowIndex --) { 

		if ( selectedMatrix [ rowIndex ][ columnIndex ] === 1 ){
			combinations.push ( items [ rowIndex - 1])
			columnIndex = columnIndex - items [ rowIndex - 1].weight
		}

	}

	return {
		maximumValue,
		combinations
	}
}

module.exports = optimizeValue