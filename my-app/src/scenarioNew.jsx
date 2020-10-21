import React, { Component } from 'react';
import ScenarioNewForm from "./scenarioNewForm";
import Hoprs from "./scenarioNewHoprs";
import Error from "./errorPage"
import Main from './main';

class ScenarioNew extends Component {
  constructor(props){
      super(props);
      this.state = {mode: "new"};

      this.handleNew = this.handleNew.bind(this);
      this.handleMan = this.handleMan.bind(this);
  }

  handleNew(){this.setState({mode: 'new'});}
  handleMan(){this.setState({mode: 'hoprs'});}


  render() { 

      const renderStatus = () => {
          let com = '';
          switch(this.state.mode){
              case 'new':
                  com = <ScenarioNewForm/>
                  break;
              case "hoprs":
                  com = <Hoprs/>
                  break;
              default:
                  com = <Error/>
                  break;
          }
          return com;
      }

      return ( 
      <div className="main">
          <div className="mainscreen">
              {renderStatus()}
          </div>
          <div>
            <button onClick={this.handleMan}>Next</button>
          </div>
      </div>    );
  }
}

export default ScenarioNew;