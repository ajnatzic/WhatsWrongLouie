import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
class AthleteHistory extends Component {

    render() {
        return (
                <Row>
                    <Col>
                        <form>
                        <div className="form-group">
                            <label className="text-left">Story</label>
                            <textarea className="form-control" rows="3" defaultValue="I had been playing around at Central Park when all of the sudden, my arm broke. I got rushed to the hospital immediately and as soon as I got to the hospital I was taken care off. The surgery went so well and so fast, the doctors did not mess anything up and it was perfect. My cast was taken off today and it felt amazing. After so long it was over and nothing bad happened while i had my cast. When they took it off it went smoothly and now I’m Back in the Game!"></textarea>

                            <label className="text-left">Knowledge</label>
                            <textarea className="form-control" rows="3" defaultValue="The athlete hurt their arm dunking the ball."></textarea>
                        </div>
                            <div className="form-group">           
                                {/* Submit Button */}
                                <button type="submit" className="btn btn-primary float-left mt-3">Submit</button>
                            </div>
                        </form>
                    </Col>
                    <div className="col">
                        <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
                    </div>
                </Row>
            
        );
    }
}

export default AthleteHistory;