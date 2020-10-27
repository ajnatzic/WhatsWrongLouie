import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {field: 'id', headerName: "ID", width: 130},
  {field: 'name', headerName: "Name", width: 130},
  {field: 'lastPlayed', headerName: "Last Played", width: 130},
  {field: 'athleteStatus', headerName: 'Athletes', width: 300}
]

class ManageScenario extends Component {
  constructor(props) {
    super(props);
    this.state = {searchID: null,
                  searchTitle: '',
                  obj: [
                    {id: "10 00 00 00", name: "Simon Crump", lastPlayed: "02/02/2020", athleteStatus: "3/8 Injured"},
                    {id: "10 00 00 01", name: "Dante Smith", lastPlayed: "02/17/2020", athleteStatus: "2/7 Injured"},
                    {id: "10 00 00 02", name: "Jessica James", lastPlayed: "03/17/2020", athleteStatus: "6/7 Injured"},
                    {id: "10 00 00 03", name: "Kamil Buson", lastPlayed: "04/02/2020", athleteStatus: "0/7 Injured"},
                    {id: "10 00 00 04", name: "Yun Fang", lastPlayed: "04/22/2020", athleteStatus: "4/5 Injured"},
                    {id: "10 00 00 05", name: "Desiree Sjoberg", lastPlayed: "05/02/2020",  athleteStatus: "4/4 Injured"},
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
              Name:
              <input type="text" name="searchTitle" onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <div style={{height: 500, width: '100%'}}>
          <DataGrid rows={this.state.obj} columns={columns} pageSize={5} checkBoxSelection />
        </div>
      </div>

     );
  }
}
 
export default ManageScenario;