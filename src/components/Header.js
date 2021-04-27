import React from 'react';
import '../style.css';
import {Link} from "react-router-dom"

function Header (){
    return (
        <div>
            <header className="header u-clearfix u-grey-90 u-header u-header" id="sec-0c3e">
                <div className="u-clearfix">
                    
                    <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
                    
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand" href="#"><img src={require('../img/logo2.png').default} alt="" className="u-image u-image-1" data-image-width="1082" data-image-height="341" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarsExample02">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link" aria-current="page">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/signin" className="nav-link" >Sign in</Link>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
        
}


export default Header
