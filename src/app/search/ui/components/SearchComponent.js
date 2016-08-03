import React, {Component, PropTypes} from 'react'

class SearchComponent extends Component{
    render(){
        const {onSearchSubmit, searchResults} = this.props;
        return(
            <div>
                <div className='voffset4'>
                    <form onSubmit={onSearchSubmit}>
                        <button type='submit'>Search</button>
                    </form>
                </div>
                <hr/>
                {
                    (searchResults && searchResults.length > 0)
                        ? <div className='voffset4 list-group'>
                            {
                                searchResults.map(function(value, index) {
                                    return <a href='#' key={index} className='list-group-item'>
                                            <h4 className="list-group-item-heading">{value.Name}</h4>
                                            <h5 className="list-group-item-text">{value.Country}</h5>
                                            <p className="list-group-item-text">{value.Address}</p>
                                        </a>
                                })
                            }
                        </div>
                        : null
                }
            </div>
        )
    }
}

SearchComponent.propTypes = {
    onSearchSubmit: PropTypes.func.isRequired,
    searchResults: PropTypes.array
}
export default SearchComponent
