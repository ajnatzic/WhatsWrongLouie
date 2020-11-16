import React, { Component } from 'react';

class AthleteObservation extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <img src="https://www.epainassist.com/images/Article-Images/what-shoulder-joint-bruises.jpg" class="rounded img-fluid my-auto" alt="Bruised Shoulder"></img>
                    <form>
                        <div className="form-group"> 
                            <label>Observations</label>
                            <select className="form-control form-control-sm my-2">
                                <option>None</option>
                                <option>Bruised Shoulder</option>
                                <option>Broken Arm</option>
                            </select>  
                            <select className="form-control form-control-sm my-2">
                                <option>None</option>
                                <option>Bruised Shoulder</option>
                                <option>Broken Arm</option>
                            </select>  
                            <select className="form-control form-control-sm my-2">
                                <option>None</option>
                                <option>Bruised Shoulder</option>
                                <option>Broken Arm</option>
                            </select>  
                            <select className="form-control form-control-sm my-2">
                                <option>None</option>
                                <option>Bruised Shoulder</option>
                                <option>Broken Arm</option>
                            </select>
                        </div>
                        <div class="form-group"> 
                            {/* Submit Button */}
                            <button type="submit" class="btn btn-primary float-left mt-3">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
                </div>
            </div>
        );
    }
}

export default AthleteObservation;