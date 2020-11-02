import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (  
            // Basic nav bar (shows on every screen)
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        {/* TODO: add hrefs to <a> tags */}
                        <a href="/" className="navbar-brand">Whats wrong with the Lakers?</a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a href="/" className="nav-link">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Account Settings</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Help</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </div>
                );
    }
}
 
export default NavBar;