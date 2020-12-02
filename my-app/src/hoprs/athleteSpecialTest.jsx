import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
class AthleteSpecialTests extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col>
                        <form>
                            <div className="form-group"> 
                                    {/* Special Test 1 */}
                                    <label>Special Test 1:</label>
                                    <div className="input-group mb-3">
                                        <input id="specialTest1" type="text" className="form-control" placeholder="Compression"></input>
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-primary">-</span>
                                        </div>
                                    </div>

                                    {/* Special Test 2 */}
                                    <label>Special Test 2:</label>
                                    <div className="input-group mb-3">
                                        <input id="specialTest2" type="text" className="form-control " placeholder="Percussion"></input>
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-danger">+</span>
                                        </div>
                                    </div>

                                    {/* Special Test 3 */}
                                    <label>Special Test 3:</label>
                                    <div className="input-group mb-3">
                                        <input id="specialTest3" type="text" className="form-control " placeholder="Talar Tilt"></input>
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-success">O</span>
                                        </div>
                                    </div>


                            </div>

                                {/* Check Button */}
                                <button type="button" className="btn btn-outline-success float-left my-3">Check results</button>
                                {/* Submit Button */}
                                <button type="submit" className="btn btn-primary float-left mt-3">Submit</button>
                        </form>
                    </Col>
                    <Col>
                        <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
                    </Col>
                </Row>
            </>
        );
    }
}

export default AthleteSpecialTests;