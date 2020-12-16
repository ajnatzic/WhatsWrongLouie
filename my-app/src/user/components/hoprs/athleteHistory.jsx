import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
/**
 * Currently, the Athlete History mini-game is static. 
 * 
 * The intended flow of this mini-game is as follows:
 * 
 * 1. Player selects relevant, underlined keywords based on what they believe is the cause of the injury in the "Story" textbox.
 * 
 * 2. The keywords selected by the player are placed into the "Knowlege" textbox. 
 * 
 * 3. Once the player is confident that they have selected the correct keywords, they will click the submit button. 
 *    Upon submission, their answers will be validated with the History keywords defined by the super-user.
 */
class AthleteHistory extends Component {

    render() {
        return (
                <Row>
                    <Col>
                        <form>
                        <div className="form-group">
                            {/* 1. Story textbox. Student selects keywords here. */}
                            <label className="text-left">Story</label>
                            <textarea className="form-control" rows="3" defaultValue="I had been playing around at Central Park when all of the sudden, my arm broke. I got rushed to the hospital immediately and as soon as I got to the hospital I was taken care off. The surgery went so well and so fast, the doctors did not mess anything up and it was perfect. My cast was taken off today and it felt amazing. After so long it was over and nothing bad happened while i had my cast. When they took it off it went smoothly and now I’m Back in the Game!"></textarea>

                            {/* 2. Knowledge textbox. Underlined keywords selected by student should show up here. */}
                            <label className="text-left">Knowledge</label>
                            <textarea className="form-control" rows="3" defaultValue="None: The athlete did not provide useful information."></textarea>
                        </div>
                            <div className="form-group">           
                                {/* 3. Submit Button. Answers in the knowledge textbox are checked with the keywords selected in the database. */}
                                <button type="submit" className="btn btn-primary float-left mt-3">Submit</button>
                            </div>
                        </form>
                    </Col>
                    <div className="col">
                        {/* Example Athlete model */}
                        <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
                    </div>
                </Row>
            
        );
    }
}

export default AthleteHistory;