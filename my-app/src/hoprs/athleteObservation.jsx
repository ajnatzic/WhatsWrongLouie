import React, { Component } from 'react';

class AthleteObservation extends Component {
    render() {
        return (
            <div className="container">
                
            {/* Back Button */}
            <div class="row">
                    <button type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                    <div className="p-3 w-auto my-2 bg-secondary text-white">Observation</div>
            </div>

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
                            {/* Treatments Button */}
                            <button type="button" class="btn btn-secondary float-left my-3">Treatment</button>
                            {/* Submit Button */}
                            <button type="submit" class="btn btn-primary float-left mt-3">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
                </div>
            </div>
            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left">References</button>
        </div>
        );
    }
}

export default AthleteObservation;