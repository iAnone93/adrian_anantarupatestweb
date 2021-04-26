import React from 'react';
import './style.css';

function Header (){
    return (
        <div>
            <header className="header u-clearfix u-grey-90 u-header u-header" id="sec-0c3e">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <img src={require('./img/logo2.png').default} alt="" className="u-image u-image-round u-image-1" data-image-width="1082" data-image-height="341"/>
                    <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1" data-responsive-from="MD" data-position="">
                        <div class="u-custom-menu u-nav-container">
                            <ul className="u-nav u-spacing-30 u-unstyled u-nav-1">
                                <li class="u-nav-item">
                                    login
                                </li>
                            </ul>
                        </div>
                        <div className="u-custom-menu u-nav-container-collapse">
                            <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                                <div className="u-sidenav-overflow">
                                    <div className="u-menu-close">
                                    </div>
                                    <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                                        <li className="u-nav-item">
                                            login
                                        </li></ul>
                                </div>
                            </div>
                            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
        
}


export default Header
