import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
class AthletePalpation extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <form>
                        <div className="form-group"> 

                        <label>Pain Level</label>
                        <button type="button" className="btn btn-info btn-lg btn-block">2</button>

                        <label className="mt-2">Condition</label>
                        <button type="button" className="btn btn-info btn-lg btn-block">Deltoid Ligament</button>
                        </div>

                        <div className="form-group mt-5">
                            <div className="input-group mb-3">

                                <input type="text" className="form-control" placeholder="Input"></input>
                                <button type="submit" className="btn btn-primary btn-block float-left mt-3">Check Spelling</button>

                                <div className="form-check mt-5">
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