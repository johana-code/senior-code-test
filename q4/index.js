/**
 * 
 
    ----------------
 
	  Question Four
	  
	----------------
	   
*/

//Load Environment Variables
require ( 'dotenv' ).config ()
const __PORT__ = process.env.PORT || 3333
const DB       = require ( './lib/db')

//validators
const Validator = require("fastest-validator")
const v         = new Validator()


class Api {

	//Handlers
	getUsers   ( request, response ){

		try {

			//Validate Request Query parameters
			const schema = {
				users: { type: "array", items: "string" }
			}

			let checkSchema = v.validate( request.body, schema)

			//Invalid Request Query parameters
			if (  checkSchema instanceof Array ) {
				response.status(400).json(checkSchema)
			}

			//Valid Request Query parameters
			else {
				let names = request.body.users.sort()

				//get user data
				let users = []
				let db    = DB()
	
				for ( let name of names ) {
	
					//get data from our JSON database
					let data = db.get ('users').find({ name }).value()
					let ious = db.get ('ious' ).value()
	
					//for each user get user data and iou data
					if ( data && ious ){
						
						let owes_array    = ious.filter( e => e.borrower === name )
						let owed_by_array = ious.filter( e => e.lender   === name )
			
						//aggregate owes and owed by arrays by key
						let owes    = {}
						let owed_by = {}
			
						owes_array.map ( entry => {
			
							let lender = entry.lender
			
							if ( owes [ lender ] ) {
								owes [ lender ] = owes [ lender ] + entry.amount
							}
							else {
								owes [ lender ] = entry.amount
							}
						})
						owed_by_array.map ( entry => {
			
							let borrower = entry.borrower
			
							if ( owed_by [ borrower ] ) {
								owed_by [ borrower ] = owed_by [ borrower ] + entry.amount
							}
							else {
								owed_by [ borrower ] = entry.amount
							}
						})
	
						// aggregate balance
						let owes_total = owes_array.reduce ( ( a, b ) => {
							return a + b.amount						
						},0)
	
						let owed_total = owed_by_array.reduce ( ( a, b ) => {
							return a + b.amount					
						},0 )
	
						//get lender data
						data.owes    = Object.keys (owes).length    > 0 ? owes    : {}
						data.owed_by = Object.keys (owed_by).length > 0 ? owed_by : {}
						data.balance = owed_total - owes_total
	
	
						users.push ( data )
					}
	
					//if ious data doesnt exist
					if ( data && !ious ) {
						users.push ({ ...data, ... { owes: {}, owed_by: {},balance: 0 }})
					}
				}
					
				response.status(200).json( users )

				//unset db variable so that it can be garbage collected
				db = null
			}
		}
		catch ( e ) {
			response.status(400).json([])
		}

	}
	addUser    ( request, response ){

		try {
			//Validate Request Query parameters
			const schema = {
				user: { 
					type : 'object',
					props: {
						name : {
							type: 'string'
						}
					}					
				}
			}

			let checkSchema = v.validate( request.body, schema)

			//Invalid Request Query parameters
			if (  checkSchema instanceof Array ) {
				response.status(400).json(checkSchema)
			}

			//Valid Request Query parameters
			else {

				let user = request.body.user
				let db   = DB()

				//check if the user exists
				let data = db.get('users').find({ name: user.name }).value()

				if ( !data ){
					db.get('users').push(user).write()
					response.status(201).json({ success:true, message: 'User added' })
				}
				else {
					response.status(401).json({ success:false, message:'User already exists'})
				}

				//unset db variable so that it can be garbage collected
				db = null
			}
		}
		catch  (e ) {
			response.status(400).json({ success:false, status: 'Cannot add user', message:e.message})
		}
	}
	addIoU     ( request, response ){

		try {
			
			//Validate Request Query parameters
			const schema = {
				lender: { type: 'string' },
				borrower: { type: 'string'},
				amount : { type : 'number'}
			}

			let checkSchema = v.validate( request.body, schema)

			//Invalid Request Query parameters
			if (  checkSchema instanceof Array ) {
				response.status(400).json(checkSchema)
			}

			//Valid Request Query parameters
			else {

				let { lender, borrower, amount } = request.body

				let db   = DB()

				//check if the lender exists
				let lenderExists = db.get('users').find({ name: lender }).value()

				//check if the borrower exists
				let borrowerExists = db.get('users').find({ name: borrower }).value()

				if ( !lenderExists ){
					response.status(400).json({ success:false, message: 'Lender Doesnt Exist' })
				}
				if ( !borrowerExists ){
					response.status(400).json({ success:false, message: 'Borrower Doesnt Exist' })
				}

				if ( lenderExists && borrowerExists ) {
					db.get('ious').push( request.body ).write()
					response.status(200).json({ success:true, message:'IOU added successfully'})
				}

				//unset db variable so that it can be garbage collected
				db = null
			}
		}
		catch ( e ) {
			response.status(400).json({ success:false, status: 'Cannot add IoU', message:e.message})
		}
	}
	deleteUser ( request, response ) {
		try {

			//Validate Request Query parameters
			const schema = {
				user: { 
					type : 'object',
					props: {
						name : {
							type: 'string'
						}
					}					
				}
			}

			let checkSchema = v.validate( request.body, schema)

			//Invalid Request Query parameters
			if (  checkSchema instanceof Array ) {
				response.status(400).json(checkSchema)
			}

			//Valid Request Query parameters
			else {

				let name = request.body.user.name
				//unset db variable so that it can be garbage collected
				let db   = null
				db       = DB()

				//get data from our JSON database
				let users = db.get ('users').value()
				let ious  = db.get ('ious' ).value()
				let userExists = users.find ( user => user.name === name )

				//filter out the user from the users and ious collections
				if ( userExists && users instanceof Array ){
					
					users = users.filter ( user => {
						if ( user.name !== name ) {
							return user
						}
					})
				}
				if ( userExists && ious instanceof Array ){

					ious = ious.filter ( iou => {
						if ( iou.lender !== name ) {

							if ( iou.borrower !== name ) {
								return iou
							}

						}
					})
				}

				//update the JSON data store with the remaining users and IoU's
				if ( userExists ) {
					db.set('users', users).write()
					db.set('ious', ious  ).write()

					response.status(200).json({ success: true, error: `User ${name} Deleted` })
				}
				else {
					response.status(400).json({ success: false, error: `User ${name} Doesnt Exist` })
				}
			}
			
		}
		catch ( e ) {
			response.status(400).json({ success: false, error: 'Cannot Delete User, ERROR: ' + e.message })
		}
	}

	//REST API
    serve () { 

		let server     = require ( 'express' )().disable ( 'x-powered-by' )
		let bodyParser = require ( 'body-parser')

		//middleware 
		server.use ( bodyParser.json() )
		server.use ( bodyParser.urlencoded({ extended : true }) )

		//routes
		server.get  ( '/users'   , this.getUsers   )
		server.post ( '/add'     , this.addUser    )
		server.post ( '/iou'     , this.addIoU     )
		server.post ( '/delete'  , this.deleteUser )

		//listen
		server.listen ( __PORT__, () => {
			console.log ( `[ IoU API ] Listening on port: %d`, __PORT__ )
		}) 

	}

}

new Api().serve()