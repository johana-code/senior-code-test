/**=============================
 * 
 *  IMPORTS
 * 
 =============================*/
//import redux 
import { compose, applyMiddleware, createStore  } from 'redux'

//import services
import { InitialState as initial, Reducers as reducers  } from '@services'

//import middleware
import  {  createLogger as logger } from 'redux-logger'
import thunk from 'redux-thunk'

//redux persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'


/**=============================
 * 
 *  MIDDLEWARE
 * 
 =============================*/
//apply some middleware
const finalCreateStore = compose(
	applyMiddleware ( logger(), thunk )
)( createStore )


/**=============================
 * 
 *  REDUX PERSIST
 * 
 =============================*/
 const persistConfig = {
	key: 'root',
	storage ,	
	stateReconciler: autoMergeLevel2
}


//wrap our reducer with the persist reducer and its configs
const pReducer = persistReducer ( persistConfig, reducers )


/**=============================
 * 
 *  CONFIGURE STORE
 * 
 =============================*/
//configure our store 
const configureStore =  ( initialState = initial ) => {

	const store = finalCreateStore ( pReducer, initialState )

	//wrap our store with the persist store
	const persistor = persistStore(store)

	return {
		store,
		persistor
	}
}

export default configureStore