import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class ManageStudent extends Component {
    state = {  }
    render() { 
        return ( <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Last Played</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10 00 00 00</td>
            <td>James</td>
            <td>Brown</td>
            <td>10/14/2020</td>
          </tr>
          <tr>
            <td>10 00 00 01</td>
            <td>Alex</td>
            <td>Trebeck</td>
            <td>10/14/2020</td>
          </tr>
          <tr>
            <td>10 00 00 02</td>
            <td>Elijah </td>
            <td>Wood</td>
            <td>10/13/2020</td>
          </tr>
        </tbody>
      </Table> );
    }
}
 
export default ManageStudent;