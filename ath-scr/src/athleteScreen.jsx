import React, { Component } from 'react';

// Import Athlete Creation Screen (includes form and model of "athlete")
import AthleteCreateScreen from './athleteCreateForm';

/** Home Screen */
import AthleteHomeScreen from './athleteHomeScreen';

/** Treat Screen */
import AthleteTreatScreen from './athleteTreatScreen';

/** HOPRS screens */
import AthleteHistory from './hoprs/athleteHistory';
import AthleteObservation from './hoprs/athleteObservation';
import AthletePalpation from './hoprs/athletePalpation';
import AthleteROM from './hoprs/athleteROM';
import AthleteSpecialTests from './hoprs/athleteSpecialTest';

/** Error screen (if a screen cannot load for some reason) */
import Error from './errorPage';


class AthleteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { mode: "snot" };

        this.handleNewAthlete = this.handleNewAthlete.bind(this);
    }

    // Upon clicking "Create new Athlete" Button
    handleNewAthlete() {
        console.log('button clicked!!!!');
        this.setState({ mode: 'athNew' });
    }


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
                    com = <AthleteHomeScreen />
                    break;
                // Treat screen
                case 'athTreat':
                    com = <AthleteTreatScreen />
                    break;

                /** Begin HOPRS screens */
                // History screen
                case 'athHistory':
                    com = <AthleteHistory />
                    break;
                // Observation screen
                case 'athObservation':
                    com = <AthleteObservation />
                    break;
                // Palpation screen
                case 'athPalpation':
                    com = <AthletePalpation />
                    break;
                // Range of Motion screen
                case 'athROM':
                    com = <AthleteROM />
                    break;
                // Special Tests screen
                case 'athST':
                    com = <AthleteSpecialTests />
                    break;
                default:
                    com = <Error />
                    break;
            }
            return com;
        }
        return (
            <div className="container">
                <div className="mainscreen">
                    {renderStatus()}
                </div>
            </div>);
    }
}

export default AthleteScreen;
