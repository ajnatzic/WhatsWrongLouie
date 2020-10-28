import React, { Component } from 'react';


class AthleteHomeScreen extends Component {
    render() {
        return (
            <div className="mainScreen vh-100 overflow-auto">
                <h1>Main Game Screen</h1>
                <button id="treatButton" type="button" className="btn btn-danger btn-lg float-left">Treat</button>
                <button id="teamButton" type="button" className="btn btn-success btn-lg float-right">Team</button>
                <div>
                <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid" alt="Athlete"></img>
                </div>
                <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left">References</button>
                <button id="settingsButton" type="button" className="btn btn-secondary btn-lg float-right">Settings</button>
            </div>);
    }
}

export default AthleteHomeScreen;