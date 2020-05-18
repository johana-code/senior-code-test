import axios from 'axios'

const actions = {
	addTodo      : ( payload ) => {
		return {
			type : 'ADD_TODO',
			payload
		}
	},
	deleteTodo   : ( payload ) => {
		return {
			type : 'DELETE_TODO',
			payload
		}
	},
	completeTodo : ( payload ) => {
		return {
			type : 'COMPLETE_TODO',
			payload
		}
	},
	fetchTodos   : () => {	
		return {
			type : 'FETCH_TODOS'
		}	
	},
	changeName : ( payload ) => {

		return (dispatch) => {
			return axios.post(`http://localhost:3020/api/chat/hello`)
			  .then(response => {
				console.log ( response )
				dispatch(actions.changeNameInState(response.data.message))
			  })
			  .catch(error => {
				throw(error);
			  });
		  };
		  
	
	},
	changeNameInState : ( payload ) => {
		return {
			type : 'CHANGE_NAME',
			payload
		}	
	}
}

export default actions