import React, { Component } from 'react';

class AthleteSpecialTests extends Component {
    render() {
        return (
            <div className="container">
                
            {/* Back Button */}
            <div class="row">
                    <button type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                    <div className="p-3 w-auto my-2 bg-secondary text-white">Special Tests</div>
            </div>

            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group"> 


                                {/* Special Test 1 */}
                                <label for="specialTest1">Special Test 1:</label>
                                <div className="input-group mb-3">
                                    <input id="specialTest1" type="text" className="form-control " placeholder="Compression"></input>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-primary" id="basic-addon2">-</span>
                                    </div>
                                </div>

                                {/* Special Test 2 */}
                                <label for="specialTest1">Special Test 2:</label>
                                <div className="input-group mb-3">
                                    <input id="specialTest2" type="text" className="form-control " placeholder="Percussion"></input>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-danger" id="basic-addon2">+</span>
                                    </div>
                                </div>

                                {/* Special Test 3 */}
                                <label for="specialTest1">Special Test 3:</label>
                                <div className="input-group mb-3">
                                    <input id="specialTest3" type="text" className="form-control " placeholder="Talar Tilt"></input>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-success" id="basic-addon2">O</span>
                                    </div>
                                </div>


                        </div>

                            {/* Check Button */}
                            <button type="button" class="btn btn-outline-success float-left my-3">Check results</button>
                            {/* Submit Button */}
                            <button type="submit" class="btn btn-primary float-left mt-3">Submit</button>
                    </form>
                </div>
                <div className="col">
                    <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
                </div>
            </div>
            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
        </div>
        );
    }
}

export default AthleteSpecialTests;