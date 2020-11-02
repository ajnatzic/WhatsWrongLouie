import React, { Component } from 'react';

class AthleteTreatScreen extends Component {
    render() {
        return (
            <div className="container">
                
                {/* Back Button */}
                <div className="row">
                    <button id="treatButton" type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                </div>


                <div className="row">
                    <div className="col">
                        <form>
                            <div class="form-group">
                                {/* History */}
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control " placeholder="History" aria-label="History" aria-describedby="basic-addon2"></input>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-primary" id="basic-addon2">-</span>
                                    </div>
                                </div>

                                {/* Observation */}
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Observation" aria-label="Observation" aria-describedby="basic-addon2"></input>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-danger" id="basic-addon2">+</span>
                                    </div>
                                </div>

                                {/* Palpations */}
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Palpations" aria-label="Palpations" aria-describedby="basic-addon2"></input>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-success" id="basic-addon2">O</span>
                                    </div>
                                </div>

                                {/* Range of Motion */}
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Range of Motion" aria-label="Range of Motion" aria-describedby="basic-addon2"></input>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-success" id="basic-addon2">O</span>
                                    </div>
                                </div>

                                {/* Special Tests */}
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Special Tests" aria-label="Special Tests" aria-describedby="basic-addon2"></input>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-success" id="basic-addon2">O</span>
                                    </div>
                                </div>

                                
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

export default AthleteTreatScreen;