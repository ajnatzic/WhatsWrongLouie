import React, { Component } from 'react';
import axios from 'axios';


class ScenarioNewForm extends Component {
    
    
      render() {
        return (
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">ID: </label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="10 00 00 00"></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Title: </label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Broken Arm  "></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Review</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Injury Type</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Sprain</option>
                <option>Strain</option>
                <option>Fracture</option>
                <option>itis</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Injury Location</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Torso</option>
                <option>Leg</option>
                <option>Foot</option>
                <option>Arm</option>
                <option>Hand</option>
                <option>Head</option>
                <option>Other</option>  
              </select>
            </div>
          </form>
        );
      }
}
 
export default ScenarioNewForm;