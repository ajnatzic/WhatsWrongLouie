import React, { Component } from 'react';
import { Col, Row } from "react-bootstrap";

import AthleteNavBar from './components/athleteNavbar';
import AthleteCreateScreen from './components/athleteCreateForm';
import AthleteReferencesScreen from './components/athleteReferencesScreen';
import AthleteSettingsScreen from './components/athleteSettingsScreen';
import AthleteTeamScreen from './components/athleteTeamScreen';
import AthleteTreatmentScreen from './components/athleteTreatmentScreen';
import Error from '../errorPage';

/** HOPRS mini-games */
import AthleteHistory from './components/hoprs/athleteHistory';
import AthleteObservation from './components/hoprs/athleteObservation';
import AthletePalpation from './components/hoprs/athletePalpation';
import AthleteROM from './components/hoprs/athleteROM';
import AthleteSpecialTests from './components/hoprs/athleteSpecialTest';

class AthleteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'athHome'
        }

        this.skipToHomeScreen = this.skipToHomeScreen.bind(this);
        this.handleNewAthlete = this.handleNewAthlete.bind(this);

        this.handleTreatButton = this.handleTreatButton.bind(this);
        this.handleTreatmentButton = this.handleTreatmentButton.bind(this);

        this.handleTeamButton = this.handleTeamButton.bind(this);
        this.handleRefButton = this.handleRefButton.bind(this);
        this.handleSetButton = this.handleSetButton.bind(this);

        this.handleHistory = this.handleHistory.bind(this);
        this.handleObservation = this.handleObservation.bind(this);
        this.handlePalpation = this.handlePalpation.bind(this);
        this.handleROM = this.handleROM.bind(this);
        this.handleST = this.handleST.bind(this);


    }
    skipToHomeScreen() { this.setState({ mode: 'athHome' }); }
    handleNewAthlete() { this.setState({ mode: 'athNew' }); }
    
    handleTeamButton() { this.setState({ mode: 'athTeam' }); }
    handleRefButton() { this.setState({ mode: 'athRef' }); }
    handleSetButton() { this.setState({ mode: 'athSetting' }); }
    handleTreatButton() { this.setState({ mode: 'athTreat' }); }
    handleTreatmentButton() { this.setState({ mode: 'athTreatment' }); }
    
    handleHistory() { this.setState({ mode: 'athHistory' }); }
    handleObservation() { this.setState({ mode: 'athObservation' }); }
    handlePalpation() { this.setState({ mode: 'athPalpation' }); }
    handleROM() { this.setState({ mode: 'athROM' }); }
    handleST() { this.setState({ mode: 'athST' }); }


    render() {

        const renderStatus = () => {
            let com = '';
            switch (this.state.mode) {
                /** Begin Welcome Screens. New users start here */
                case 'snot':
                    com = <button id="createNewAthlete" type="button" className="btn btn-primary btn-lg" onClick={this.handleNewAthlete}>Create New Athlete</button>
                    break;
                // Athlete Create Screen
                case 'athNew':
                    com = <AthleteCreateScreen />
                    break;


                /** Begin main game screens. Returning users start here */
                // Athlete Home Screen
                case 'athHome':
                    com =
                        <React.Fragment>
                            <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left">Treat</button>
                            <button onClick={this.handleTeamButton} id="teamButton" type="button" className="btn btn-success btn-lg float-right">Team</button>
                            <div>
                                <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid" alt="Athlete"></img>
                            </div>
                            <button onClick={this.handleRefButton} id="referenceButton" type="button" className="btn btn-dark btn-lg float-left">References</button>
                            <button onClick={this.handleSetButton} id="settingsButton" type="button" className="btn btn-secondary btn-lg float-right">Settings</button>
                        </React.Fragment>
                    break;
                case 'athTeam':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.skipToHomeScreen} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Teams</div>
                            </Row>
                            <AthleteTeamScreen />
                            <button onClick={this.handleRefButton} id="referenceButton" type="button" className="btn btn-dark btn-lg float-left">References</button>
                            <button onClick={this.handleSetButton} id="settingsButton" type="button" className="btn btn-secondary btn-lg float-right">Settings</button>
                        </React.Fragment>
                    break;

                case 'athRef':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.skipToHomeScreen} type="button" className="btn btn-danger btn-lg float-left my-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">References</div>
                                <button type="button" className="btn btn-success btn-lg btn-block my-2">Add Reference</button>
                            </Row>
                            <AthleteReferencesScreen />
                        </React.Fragment>
                    break;
                case 'athSetting':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.skipToHomeScreen} type="button" className="btn btn-danger btn-lg float-left my-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Settings</div>
                            </Row>
                            <AthleteSettingsScreen />
                        </React.Fragment>
                    break;
                // Treat screen
                case 'athTreat':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.skipToHomeScreen} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="form-group">
                                        {/* History */}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="History" aria-label="History" aria-describedby="basic-addon2" readOnly></input>
                                            <div className="input-group-append">
                                                <button onClick={this.handleHistory} className="btn btn-outline-secondary" type="button" id="button-addon2">-</button>
                                            </div>
                                        </div>

                                        {/* Observation */}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Observation" aria-label="Observation" aria-describedby="basic-addon2" readOnly></input>
                                            <div className="input-group-append">
                                                <button onClick={this.handleObservation} className="btn btn-outline-danger" type="button" id="button-addon2">+</button>
                                            </div>
                                        </div>

                                        {/* Palpations */}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Palpations" aria-label="Palpations" aria-describedby="basic-addon2" readOnly></input>
                                            <div className="input-group-append">
                                                <button onClick={this.handlePalpation} className="btn btn-outline-success" type="button" id="button-addon2">O</button>
                                            </div>
                                        </div>

                                        {/* Range of Motion (ROM)*/}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Range of Motion" aria-label="Range of Motion" aria-describedby="basic-addon2" readOnly></input>
                                            <div className="input-group-append">
                                                <button onClick={this.handleROM} className="btn btn-outline-success" type="button" id="button-addon2">O</button>
                                            </div>
                                        </div>

                                        {/* Special Tests */}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Special Tests" aria-label="Special Tests" aria-describedby="basic-addon2" readOnly></input>
                                            <div className="input-group-append">
                                                <button onClick={this.handleST} className="btn btn-outline-success" type="button" id="button-addon2">O</button>
                                            </div>
                                        </div>


                                        {/* Treatments Button */}
                                        <button onClick={this.handleTreatmentButton} type="button" className="btn btn-secondary float-left my-3">Treatment</button>
                                        {/* Submit Button */}
                                        <button type="submit" className="btn btn-primary float-left mt-3">Submit</button>
                                    </div>
                                </Col>

                                <Col>
                                    <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
                                </Col>
                            </Row>
                        </React.Fragment>
                    break;
                // Treatment screen, located inside the treat screen
                case 'athTreatment':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} id="treatButton" type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Treatment</div>
                            </Row>
                            <AthleteTreatmentScreen />
                            <div className="row">
                                <button id="referenceButton" type="button" className="btn btn-dark btn-lg">References</button>
                            </div>
                        </React.Fragment>
                    break;
                /** Begin HOPRS screens */
                // History screen
                case 'athHistory':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">History</div>
                            </Row>
                            <AthleteHistory />
                            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                        </React.Fragment>
                    break;
                // Observation screen
                case 'athObservation':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Observation</div>
                            </Row>
                            <AthleteObservation />
                            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                        </React.Fragment>
                    break;
                // Palpation screen
                case 'athPalpation':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Palpation</div>
                            </Row>
                            <AthletePalpation />
                            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                        </React.Fragment>
                    break;
                // Range of Motion screen
                case 'athROM':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Range of Motion</div>
                            </Row>
                            <AthleteROM />
                            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                        </React.Fragment>
                    break;
                // Special Tests screen
                case 'athST':
                    com =
                        <React.Fragment>
                            <Row>
                                <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Special Tests</div>
                            </Row>
                            <AthleteSpecialTests />
                            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                        </React.Fragment>
                    break;
                default:
                    com = <Error />
                    break;
            }
            return com;
        }
        return (
            <div className="container text-center h-auto position-relative">
                <AthleteNavBar />
                {renderStatus()}
            </div>);
    }
}

export default AthleteScreen;
