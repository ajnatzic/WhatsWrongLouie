import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const columns = [
  {field: 'id', headerName: "ID", width: 130},
  {field: 'name', headerName: "Name", width: 200},
  {field: 'lastPlayed', headerName: "Last Played", width: 130},
  {field: 'athleteStatus', headerName: 'Athletes', width: 300}
]
var studentList;
//Sends HTTP GET request to backend to get the list of players from the
// database. It then logs the list in the console. 
axios.get('http://localhost:5000/players/').then(res => studentList = res.data);


class ManageStudent extends Component {

  //list to hold collection documents
  constructor(props) {
    super(props);

    var obj = [];

    for(var i = 0; i < studentList.length; i++){

      obj.push({
        id: studentList[i].PID,
        name: studentList[i].PName,
        lastPlayed: studentList[i].LastPlay.substring(0, 10),
        athleteStatus: studentList[i].AthList.length
      });
    }

    console.log(obj);

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
              Name:
              <input type="text" name="searchTitle" onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <div style={{height: 500, width: '100%'}}>
          <DataGrid rows={this.state.obj} columns={columns} pageSize={5} checkBoxSelection />
        </div>

        <form>
          <h1 class="display-8">Force Injury</h1>
          <div class="jumbotron jumbotron-fluid">
            
            <div class="form-group col-md-6">
              <label for="injuryInput">Injury Type</label>
              <select class="form-control">
                <option>Select A Injury Type..</option>
                <option>Dislocation</option>
                <option>Sprain</option>
                <option>Strain</option>
                <option>Fracture</option>
                <option>Itis</option>
              </select>

            </div>

            <div class="form-group col-md-6">
              <label for="locationType">Injury Location</label>
              <select class="form-control">
                <option>Select A Injury Location..</option>
                <option>Leg</option>
                <option>Arm</option>
                <option>Torso</option>
                <option>Head</option>
                <option>Hand</option>
                <option>Foot</option>
              </select>

            </div>
            
            <div class="form-group col-md-6">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>

     );
  }
}
 
export default ManageStudent;