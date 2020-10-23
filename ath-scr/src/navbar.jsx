import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (  
            // Basic nav bar (Shows on every screen)
                <div class="container">
                <div style={{ width: 600 + 'px' }}>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        {/* TODO: add hrefs to <a> tags */}
                        <a href="/" class="navbar-brand">Whats wrong with the Lakers?</a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a href="/" class="nav-link">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a href="/" class="nav-link">Account Settings</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/" class="nav-link">Help</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
                );
    }
}
 
export default NavBar;