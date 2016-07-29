import {routeReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

const appReducer = combineReducers({
    routing: routeReducer
});

export default appReducer