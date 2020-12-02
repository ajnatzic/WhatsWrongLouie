import React, { Component } from 'react';
class AthleteROM extends Component {
    render() {
        return (
            <>
                {/* Athlete Model */}
                <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid" alt="Athlete"></img>
            

                <form>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text">{'Low range: '}</label>
                        </div>
                        <select className="custom-select">
                            <option value="1">{'Right Shoulder'}</option>
                            <option value="2">{'Left Shoulder'}</option>
                        </select>
                    </div>
                    
                    <div className="input-group mb-3">
                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary float-left mt-3">Submit</button>
                    </div>
                </form>
            </>
        );
    }
}

export default AthleteROM;