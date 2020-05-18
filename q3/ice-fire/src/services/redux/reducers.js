import { combineReducers } from 'redux'

let todosReducer    = ( todos = [] , action ) => {
	switch ( action.type ) {
		case 'ADD_TODO':
			return [{
					id       : todos.length + 1,
					text     : action.payload.text,
					completed: false
				}, ...todos ]

		case 'DELETE_TODO':
			let deleteID = action.payload.id 
			return [ ...todos.filter ( todo => todo.id !== deleteID ) ]
		case 'COMPLETE_TODO':
			let completeID = action.payload.id 
			return [ ...todos.map ( todo => {
					if ( todo.id !== completeID ) {
						todo.completed  = true
					}
					return todo
				})]
	

		case 'FETCH_TODOS':
			return todos
		default:
			return todos
	}
}
let nameReducer     = ( homeMessage = 'apunda La Kaka', action )=> {
	switch ( action.type ) {

		case 'CHANGE_NAME':
			return  action.payload
		default:
			return homeMessage

	}
}
let sidebarReducer  = ( sidebar = [], action )=> {
	switch ( action.type ) {

		case 'LOAD_CFG':
			return  action.payload
		default:
			return sidebar

	}
}

const rootReducer = combineReducers({
	todos      : todosReducer, 
	homeMessage: nameReducer,
	sidebar    : sidebarReducer
})

export default rootReducer