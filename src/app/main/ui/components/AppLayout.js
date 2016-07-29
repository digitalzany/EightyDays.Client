import React, {Component, PropTypes} from 'react'
import HeaderComponent from 'src/app/main/ui/components/HeaderComponent'

class AppLayout extends Component{
    render(){
        const {appContent} = this.props;
        return(
            <div>
                <HeaderComponent />
                <div>{appContent}</div>
            </div>
        )
    }
}

AppLayout.propTypes = {
    appContent: PropTypes.node
}
export default AppLayout 