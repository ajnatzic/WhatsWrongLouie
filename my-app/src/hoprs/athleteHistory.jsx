import React, { Component } from 'react';

class AthleteHistory extends Component {
    render() {
        return (
                <div className="row">
                    <div className="col">
                        <form>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1" className="text-left">Story</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">
                                I had been playing around at Central Park when all of the sudden, my arm broke. I got rushed to the hospital immediately and as soon as I got to the hospital I was taken care off. The surgery went so well and so fast, the doctors did not mess anything up and it was perfect. My cast was taken off today and it felt amazing. After so long it was over and nothing bad happened while i had my cast. When they took it off it went smoothly and now I’m Back in the Game!
                            </textarea>

                            <label for="exampleFormControlTextarea2" className="text-left">Knowledge</label>
                            <textarea class="form-control" id="exampleFormControlTextarea2" rows="3">
                                The athlete hurt their arm dunking the ball.
                            </textarea>
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

export default AthleteHistory;