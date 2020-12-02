import React, { Component } from 'react';
/**
 * Currently, the Athlete ROM (Range of Motion) mini-game is static. 
 * 
 * The intended flow of this mini-game is as follows:
 * 
 * 1. The player should be able to move the joints of the athlete model to determine a range of motion
 * 
 * 2. If the player notices limited range of motion in any of the limbs, they can take note of this limb and submit their answer using the <select> box
 *    
 */
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
                        {/* Player will select their answer here based on which limb they believe to have low range of motion */}
                        <select className="custom-select">
                            <option value="1">{'None'}</option>
                            <option value="2">{'Right Shoulder'}</option>
                            <option value="3">{'Left Shoulder'}</option>
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