import * as types from 'src/app/search/actions/searchActionsType'

const initialState = {
    searchCriteria: '',
    searchResults: null,
    hasSubmittedSearch: false,
    hasSucceededSearch: false,
    hasFailedSearch: false,
    errorMessage: ''
}

export default function search(state = initialState, action){

    switch (action.type){
        case types.SUBMIT_SEARCH:
            return{
                ...state,
                searchCriteria: action.searchCriteria,
                searchResults: null,
                hasSubmittedSearch: true,
                hasSucceededSearch: false,
                hasFailedSearch: false,
                errorMessage: ''
            }
        case types.SUCCEED_SEARCH:
            return{
                ...state,
                searchResults: action.searchResults,
                hasSubmittedSearch: false,
                hasSucceededSearch: true,
                hasFailedSearch: false,
                errorMessage: ''
            }
        case types.FAIL_SEARCH:
            return{
                ...state,
                searchResults: null,
                hasSubmittedSearch: false,
                hasSucceededSearch: false,
                hasFailedSearch: true,
                errorMessage: action.errorMessage
            }
        default: 
            return state
    }
}
