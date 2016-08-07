import {routeReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

import search from 'src/app/search/reducers/searchReducer'

const appReducer = combineReducers({
    search,
    routing: routeReducer
});

export default appReducer