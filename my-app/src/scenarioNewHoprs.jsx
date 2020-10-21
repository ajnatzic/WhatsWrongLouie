import React, { Component } from 'react';

import NewHistory from './scenarioHistory';
import NewObservation from './scenarioObservation';
import NewPalpation from './scenarioPalpation';
import NewROM from './scenarioROM';
import NewSpecial from './scenarioSpecial';
import Error from './errorPage';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {mode: "new"};

        this.handleNew = this.handleNew.bind(this);
        this.handleMan = this.handleMan.bind(this);
        this.handleRev = this.handleRev.bind(this);
        this.handleTest = this.handleTest.bind(this);
        this.handleGrd = this.handleGrd.bind(this);
    }

    handleNew(){this.setState({mode: 'new'});}
    handleMan(){this.setState({mode: 'man'});}
    handleRev(){this.setState({mode: 'rev'});}
    handleTest(){this.setState({mode: 'test'});}
    handleGrd(){this.setState({mode: 'grd'});}


    render() { 

        const renderStatus = () => {
            let com = '';
            switch(this.state.mode){
                case 'new':
                    com = <NewHistory/>
                    break;
                case "man":
                    com = <NewObservation/>
                    break;
                case "rev":
                    com = <NewPalpation/>
                    break;
                case 'test':
                    com = <NewROM/>
                    break;
                case "grd":
                    com = <NewSpecial/>
                    break;
                default:
                    com = <Error/>
                    break;
            }
            return com;
        }

        return ( 
        <div className="main">
            <div>
                <button onClick={this.handleNew}>H</button>
                <button onClick={this.handleMan}>O</button>
                <button onClick={this.handleRev}>P</button>
                <button onClick={this.handleTest}>R</button>
                <button onClick={this.handleGrd}>S</button>
            </div>
            <div className="mainscreen">
                {renderStatus()}
            </div>
        </div>    );
    }
}
 
export default Main;