import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const columns = [
  {field: 'id', headerName: "ID", width: 130},
  {field: 'title', headerName: "Title", width: 130},
  {field: 'injuryType', headerName: "Injury Type", width: 130},
  {field: 'injuryLoc', headerName: 'Injury Location', width: 130},
  {field: "dateCreated", headerName: "Date Created", width: 130},
  {field: "dateEdited", headerName: "Last Edited", width: 130 }
]

var scenarioList;
//Sends HTTP GET request to backend to get the list of players from the
// database. It then logs the list in the console. 
axios.get('http://localhost:5000/scenario/').then(res => scenarioList = res.data);

class ManageScenario extends Component {
  constructor(props) {
    super(props);

    var obj = [];
    
    for(var i = 0; i < scenarioList.length; i++){

      obj.push({
        id: scenarioList[i].SID,
        title: scenarioList[i].SName,
        injuryType: scenarioList[i].SCat[0],
        injuryLoc: scenarioList[i].SCat[1],
        dateCreated: scenarioList[i].SCreated.substring(0,10),
        dateEdited: scenarioList[i].LastEdited.substring(0,10)  
      });
    }

    this.state = {searchID: null,
                  searchTitle: '',
                  obj
                };
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]:val});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.searchID);
    event.preventDefault();
  }


  render() { 
    return (  
      <div>
        <div className="scenarioManageSearch">
          <form onSubmit={this.handleSubmit}>
            <h1>Manage: {this.state.searchID}{this.state.searchTitle}</h1>
            <label>
              ID:
              <input type="text" name='searchID' onChange={this.handleChange}/>
            </label> 
            <label>
              Title:
              <input type="text" name="searchTitle" onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <div style={{height: 500, width: '100%'}}>
          <DataGrid rows={this.state.obj} columns={columns} pageSize={10} checkBoxSelection />
        </div>
      </div>

     );
  }
}
 
export default ManageScenario;