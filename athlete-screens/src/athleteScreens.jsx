import React, { Component } from 'react';
// import NewScenario from './scenarioNew';
// import ManScenario from './scenarioManage';
// import RevScenario from './scenarioReview';
// import TestScenario from './scenarioTest';
// import GradeStud from './studentGrade';
// import ManStud from './studentManage';
// import SysNot from './systemNotifications';
// import SysSet from './systemSettings';

import AthleteCreator from './athleteCreator';




class Main extends Component {
    constructor(props){
        super(props);
        this.state = {mode: "snot"};

        this.handleNewAthlete = this.handleNewAthlete.bind(this);
        // this.handleMan = this.handleMan.bind(this);
        // this.handleRev = this.handleRev.bind(this);
        // this.handleTest = this.handleTest.bind(this);

        // this.handleSman = this.handleSman.bind(this);
        // this.handleGrd = this.handleGrd.bind(this);

        // this.handleSnot = this.handleSnot.bind(this);
        // this.handleSet = this.handleSet.bind(this);
    }

    handleNew(){this.setState({mode: 'new'});}
    // handleMan(){this.setState({mode: 'man'});}
    // handleRev(){this.setState({mode: 'rev'});}
    // handleTest(){this.setState({mode: 'test'});}

    // handleSman(){this.setState({mode: 'sman'});}
    // handleGrd(){this.setState({mode: 'grd'});}

    // handleSnot(){this.setState({mode: 'snot'});}
    // handleSet(){this.setState({mode: 'set'});}


    render() { 

        const renderStatus = () => {
            let com = '';
            switch(this.state.mode){
                case 'newAthlete':
                    com = <AthleteCreator/>
                    break;
                // case "man":
                //     com = <ManScenario/>
                //     break;
                // case "rev":
                //     com = <RevScenario/>
                //     break;
                // case 'test':
                //     com = <TestScenario/>
                //     break;
                // case "sman":
                //     com = <ManStud/>
                //     break;
                // case "grd":
                //     com = <GradeStud/>
                //     break;
                // case "snot":
                //     com = <SysNot/>
                //     break;
                // case "set":
                //     com = <SysSet/>
                //     break;
                // default:
                //     com = <SysNot/>
                //     break;
            }
            return com;
        }

        return ( 
        <div className="main">
            {/* <div className="mainmenu">
                <h1 >Scenario</h1>
                <button onClick={this.handleNew}>New</button>
                <button onClick={this.handleMan}>Manage</button>
                <button onClick={this.handleRev}>Review</button>
                <button onClick={this.handleTest}>Test</button>
                <h1 >Students</h1>
                <button onClick={this.handleGrd}>Grade</button>
                <button onClick={this.handleSman}>Manage</button>
                <h1>System</h1>
                <button onClick={this.handleSnot}>Notifications</button>
                <button onClick={this.handleSet}>Settings</button>
        */}
            <div class="container" style="max-width:600px">
            {/* Implement Google Sign-In */}
          <button class="g-signin2" style="padding:1em" data-onsuccess="onSignIn" data-theme="dark"></button>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">

              <a class="navbar-brand" href="#">Whats wrong with the Lakers?</a>
      
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Account Settings</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Help</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="mainscreen">
                {renderStatus()}
            </div>
        </div>
        </div>     );
    }
}
 
export default Main;