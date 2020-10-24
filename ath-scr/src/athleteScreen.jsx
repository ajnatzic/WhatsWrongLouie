import React, { Component } from 'react';

// Athlete Creation Form
import AthleteCreateForm from './athleteCreateForm';


class AthleteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { mode: "snot" };

        this.handleNewAthlete = this.handleNewAthlete.bind(this);
    }

    // Upon clicking "Create new Athlete" Button
    handleNewAthlete() {
        this.setState({ mode: 'newAthlete' });
    }


    render() {

        const renderStatus = () => {
            let com = '';
            switch (this.state.mode) {
                case 'newAthlete':
                    com = <AthleteCreateForm />
                    break;
                default:
                    // com = <Error />
                    break;
            }
            return com;
        }
        return (

            <div className="container">
                <button id="createNewAthlete" type="button" className="btn btn-primary btn-lg" onClick={this.handleNewAthlete}>Create New Athlete</button>
                <div className="mainscreen">
                    {renderStatus()}
                </div>
            </div>);
    }
}

export default AthleteScreen;
