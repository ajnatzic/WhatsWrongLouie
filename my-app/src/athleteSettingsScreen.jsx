import React, { Component } from 'react';

class AthleteSettingsScreen extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Settings Screen</h1>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
        );
    }
}

export default AthleteSettingsScreen;