module.exports = () => {

	//json database
	const low                  = require ( 'lowdb')
	const FileSync             = require ( 'lowdb/adapters/FileSync')
	const dbPath               = require('path').resolve(process.cwd(), 'iou.db' )
	const { encrypt, decrypt } = require ('./encryption')

	const adapter  = new FileSync ( dbPath, {
		// serialize   : data => encrypt ( JSON.stringify ( data ) ),
		// deserialize : data => JSON.parse ( decrypt ( data ) )
		serialize   : data => JSON.stringify ( data ) ,
		deserialize : data => JSON.parse (  data  )
	})

	let db = null //reset the database connection
	    db = low ( adapter )

	//Database defaults
	db.defaults({ 
		users : [],
		ious  : []
	})
	.write()

	return db
}
