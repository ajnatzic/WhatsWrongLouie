import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
/**
 * Currently, the Athlete Observation mini-game is static. 
 * 
 * The intended flow of this mini-game is as follows:
 * 
 * 1. The player will "scan" the athlete's body by hovering their cursor over the athlete's body (or by swiping their finger over the athlete's body if on mobile)
 * 
 * 2. Upon scanning, the player should see red circles on the athlete's model. Selecting these circles will place an image onto the left-hand side of the screen 
 *    showing a visual of the injury
 * 
 * 3. Once the injury is discovered, the player can select the injuries found using the <select> boxes below. 
 */
class AthleteObservation extends Component {
    render() {
        return (
            <Row>
                <Col>
                    {/* Example image of a shoulder joint bruise */}
                    <img src="https://www.epainassist.com/images/Article-Images/what-shoulder-joint-bruises.jpg" className="rounded img-fluid my-auto" alt="Bruised Shoulder"></img>
                    <form>
                        {/* Here the player would select the injuries that they found */}
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
                        <div className="form-group"> 
                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary float-left mt-3">Submit</button>
                        </div>
                    </form>
                </Col>
                <Col>
                    {/* Example Athlete model */}
                    <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
                </Col>
            </Row>
        );
    }
}

export default AthleteObservation;