import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './root.reducer'

const loggerMiddleware = createLogger()


const configureStore = initialState => {
    const middlewares = [thunk]
    return createStore(rootReducer => [], initialState, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))
    
}

export default configureStore