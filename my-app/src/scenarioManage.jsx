import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class ManageScenario extends Component {
  state = {  }
  render() { 
    return ( 
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Date Created</th>
      <th>Last Edited</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>40 00 00 00</td>
      <td>Broken Arm</td>
      <td>10/13/2020</td>
      <td>10/14/2020</td>
    </tr>
    <tr>
      <td>40 00 00 01</td>
      <td>Broken Leg</td>
      <td>10/14/2020</td>
      <td>10/14/2020</td>
    </tr>
    <tr>
      <td>40 00 00 02</td>
      <td>Sprain Leg </td>
      <td>10/14/2020</td>
      <td>10/14/2020</td>
    </tr>
  </tbody>
</Table>
     );
  }
}
 
export default ManageScenario;