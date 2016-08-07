import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as SearchActions from 'src/app/search/actions/searchActions'
import SearchComponent from 'src/app/search/ui/components/SearchComponent'

const bindToContext = (context, ...methods) => {
    methods.forEach(method => context[method] = context[method].bind(context));
};

class SearchContainer extends Component{
    constructor(props, context){
        super(props, context);
        bindToContext(this, 'handleSearch');
    }

    handleSearch(e){
        e.preventDefault();
        this.props.actions.search('');
    }

    render(){
        const {searchResults} = this.props;
        return(
            <SearchComponent onSearchSubmit={this.handleSearch} searchResults={searchResults} />
        );
    }
}

SearchContainer.propTypes = {
    hasSubmittedSearch: PropTypes.bool.isRequired,
    hasFailedSearch: PropTypes.bool.isRequired,
    hasSucceededSearch: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    searchResults: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        hasSubmittedSearch: state.search.hasSubmittedSearch,
        hasSucceededSearch: state.search.hasSucceededSearch,
        hasFailedSearch: state.search.hasFailedSearch,
        errorMessage: state.search.errorMessage || '',
        searchResults: state.search.searchResults || [],
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(SearchActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer)