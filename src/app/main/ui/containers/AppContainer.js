import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import AppLayout from 'src/app/main/ui/components/AppLayout'

const bindToContext = (context, ...methods) => {
    methods.forEach(method => context[method] = context[method].bind(context));
};

class AppContainer extends Component{
    constructor(props, context){
        super(props, context);
        //bindToContext(this, 'somemethod');
    }

    render(){
        const {children} = this.props
        return(
            <AppLayout appContent={children} />
        );
    }
}

AppContainer.propTypes = {
    children: PropTypes.node
}

function mapStateToProps(state){
    //TODO
    return {};
}

function mapDispatchToProps(dispatch){
    //TODO
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)