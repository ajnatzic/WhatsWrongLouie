import React, { Component } from 'react';

class AthletePalpation extends Component {
    render() {
        return (
            <div className="container">
                
            {/* Back Button */}
            <div class="row">
                    <button type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                    <div className="p-3 w-auto my-2 bg-secondary text-white">Palpation</div>
            </div>

            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group"> 

                        <label for="painLevel">Pain Level</label>
                        <button id="painLevel" type="button" class="btn btn-info btn-lg btn-block">2</button>

                        <label for="condition" className="mt-2">Condition</label>
                        <button id="condition" type="button" class="btn btn-info btn-lg btn-block">Deltoid Ligament</button>
                        </div>

                        <div className="form-group mt-5">
                            <div className="input-group mb-3">

                                <input type="text" className="form-control" placeholder="Input"></input>
                                <button type="submit" class="btn btn-primary btn-block float-left mt-3">Check Spelling</button>

                                <div class="form-check mt-5">
                                    <input class="form-check-input" type="checkbox" value="" id="tooMuchPain"></input>
                                    <label class="form-check-label" for="tooMuchPain">
                                        Too much pain?
                                    </label>
                                </div>
                            </div>
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
            <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
        </div>
        );
    }
}

export default AthletePalpation;