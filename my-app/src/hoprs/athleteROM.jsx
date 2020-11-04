import React, { Component } from 'react';

class AthleteROM extends Component {
    render() {
        return (
            <div className="container">
                {/* Athlete Model */}
                <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid" alt="Athlete"></img>
            

                <form>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Low range: </label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Select</option>
                            <option value="1">Right Shoulder</option>
                            <option value="2">Left Shoulder</option>
                        </select>
                    </div>
                    
                    <div class="input-group mb-3">
                        {/* Submit Button */}
                        <button type="submit" class="btn btn-primary float-left mt-3">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AthleteROM;