import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {field: 'id', headerName: "ID", width: 130},
  {field: 'title', headerName: "Title", width: 130},
  {field: 'injuryType', headerName: "Injury Type", width: 130},
  {field: 'injuryLoc', headerName: 'Injury Location', width: 130},
  {field: "dateCreated", headerName: "Date Created", width: 130},
  {field: "dateEditted", headerName: "Last Edited", width: 130 }
]

class ManageScenario extends Component {
  constructor(props) {
    super(props);
    this.state = {searchID: null,
                  searchTitle: '',
                  obj: [
                    {id: "40 00 00 00", title: "Broken Arm", dateCreated: "02/02/2020", dateEditted: "02/03/2020", injuryType: "Fracture", injuryLoc: "Arm"},
                    {id: "40 00 00 01", title: "Broken Leg", dateCreated: "02/17/2020", dateEditted: "02/18/2020", injuryType: "Fracture", injuryLoc: "Leg"},
                    {id: "40 00 00 02", title: "Sprain Leg", dateCreated: "03/17/2020", dateEditted: "03/20/2020", injuryType: "Sprain", injuryLoc: "Leg"},
                    {id: "40 00 00 03", title: "Thigh Bruise", dateCreated: "04/02/2020", dateEditted: "04/03/2020", injuryType: "Other", injuryLoc: "Leg"},
                    {id: "40 00 00 04", title: "Concussion", dateCreated: "04/22/2020", dateEditted: "04/23/2020", injuryType: "Other", injuryLoc: "Head"},
                    {id: "40 00 00 05", title: "Sprain Wrist", dateCreated: "05/02/2020", dateEditted: "05/03/2020", injuryType: "Sprain", injuryLoc: "Hand"},
                  ]
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