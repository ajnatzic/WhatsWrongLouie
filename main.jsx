import React, { Component } from 'react';
import NewScenario from './scenarioNew';
import ManScenario from './scenarioManage';
import RevScenario from './scenarioReview';

class Main extends Component {
    
    state = { 
        id: 1
     }

    render() { 
        return ( 
        <div className="main">
            <div className="mainmenu">
                <h1 >Scenario</h1>
                <button>New</button>
                <button>Manage</button>
                <button>Review</button>
                <button>Test</button>
                <h1 >Students</h1>
                <button>Grade</button>
                <button>Manage</button>
                <h1>System</h1>
                <button>Notifications</button>
                <button>Settings</button>
            </div>
            <div className="mainscreen">
                <NewScenario/>
            </div>
        </div>    );
    }
}
 
export default Main;