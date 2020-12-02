import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
/**
 * Currently, the Athlete Palpation mini-game is static. 
 * 
 * The intended flow of this mini-game is as follows:
 * 
 * 1. The player will "scan" the athlete's body by hovering their cursor over the athlete's body (or by swiping their finger over the athlete's body if on mobile)
 * 
 * 2. Upon scanning, the player will notice the pain level start to rise as they get closer to the source of the injury
 * 
 * 3. Once the player has scanned over the source of the injury, the condition button value will update with the athlete's condition.
 * 
 * 4. Finally, the player will submit their answer using an <input> text box. Spelling will be checked.
 *    
 */
class AthletePalpation extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <form>
                        <div className="form-group"> 

                        <label>Pain Level</label>
                        {/* This button value should be updated once the user gets closer to the source of the injury */}
                        <button type="button" className="btn btn-info btn-lg btn-block">2</button>  

                        <label className="mt-2">Condition</label>
                        {/* Once the user's cursor is directly over the condition, this button value should contain the condition */}
                        <button type="button" className="btn btn-info btn-lg btn-block">Deltoid Ligament</button>
                        </div>

                        <div className="form-group mt-5">
                            <div className="input-group mb-3">
                                {/* In the below input box, the player will input what they believe to be the correct injury based on the condition. */}
                                <input type="text" className="form-control" placeholder="Input"></input>
                                {/* It will then be spell-checked using the below button */}
                                <button type="submit" className="btn btn-primary btn-block float-left mt-3">Check Spelling</button>

                                <div className="form-check mt-5">
                                    {/* Also, the player can make an assumption that the virtual athlete is in too much pain. (Based on documentation from the sponsor's)
                                    If that is the case, then this input box will be checked before submitting. */}
                                    <input className="form-check-input" type="checkbox" value=""></input>
                                    <label className="form-check-label">{'Too much pain?'}</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group"> 
                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary float-left mt-3">Submit</button>
                        </div>
                    </form>
                </Col>
                <Col>
                    <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
                </Col>
            </Row>
        );
    }
}

export default AthletePalpation;