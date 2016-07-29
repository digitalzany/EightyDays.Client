import React, {Component, PropTypes} from 'react'
import styles from './HeaderComponent.css'

class HeaderComponent extends Component{

    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className={`navbar-brand ${styles.brandName}`} href="#">Around the world in Eighty Days</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Search</a></li>
                        <li><a href="#">Travellers' Kit</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default HeaderComponent

