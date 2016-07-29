import * as types from 'src/app/search/actions/searchActionsType'
import * as uiconfig from 'uiconfig'

function submitSearch(searchCriteria){
    return {type: types.SUBMIT_SEARCH, searchCriteria: searchCriteria }
}

function succeedSearch(searchResults){
    return {type: types.SUCCEED_SEARCH, searchResults: searchResults }
}

function failSearch(errorMessage){
    return {type: types.FAIL_SEARCH, errorMessage: errorMessage }
}

export function search(searchCriteria){
    return dispatch => {
        dispatch(submitSearch(searchCriteria))
        window.fetch(uiconfig.GetAllStocks_Api, {credentials: 'include' }).then(res => {
            console.log('ok', res);
        }).catch(err => {
            console.log('error', err);
        });
    };
}