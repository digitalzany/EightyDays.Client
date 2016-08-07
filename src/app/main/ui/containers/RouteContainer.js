import React, {Component, PropTypes} from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'
import * as AppHistory from 'src/app/main/modules/appHistory'
import AppContainer from 'src/app/main/ui/containers/AppContainer'
import SearchContainer from 'src/app/search/ui/containers/SearchContainer'

class RouteContainer extends Component {
    render() {
        const { store } = this.props;
        let appHistory = AppHistory.getAppHistory();
        return (
            <Provider store={store} >
                <div>
                    <Router history={appHistory}>
                        <Route path="/" component={AppContainer}>
                            <IndexRoute component={SearchContainer} />
                        </Route>
                    </Router>
                </div>
            </Provider>
        );
    }
}

RouteContainer.propTypes = {
    store: PropTypes.object.isRequired
}

export default RouteContainer