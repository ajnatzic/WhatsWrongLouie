import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
class AthleteObservation extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <img src="https://www.epainassist.com/images/Article-Images/what-shoulder-joint-bruises.jpg" className="rounded img-fluid my-auto" alt="Bruised Shoulder"></img>
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

export default AthleteObservation;