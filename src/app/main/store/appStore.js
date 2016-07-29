import {createStore, applyMiddleware, compose } from 'redux'
import {syncHistory} from 'react-router-redux'
import thunk from 'redux-thunk'

import * as AppHistory from 'src/app/main/modules/appHistory'
import appReducer from 'src/app/main/reducers/appReducer'

export default function configureStore(initialState) {
    const appHistory = AppHistory.getAppHistory();
    
    return createStore(
        appReducer,
        initialState,
        compose(
            applyMiddleware(thunk, syncHistory(appHistory)),
            window.devToolsExtensions? window.devToolsExtensions(): f=>f
        )
    );
}