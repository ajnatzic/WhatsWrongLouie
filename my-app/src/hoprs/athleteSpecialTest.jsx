import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
/**
 * Currently, the Athlete Special test mini-game is static. 
 * 
 * The intended flow of this mini-game is as follows:
 * 
 * 1. The player should be able to input a special test into each of the input boxes below (based on a provided list from the sponsor's)
 * 
 * 2. Upon entering a special test, the appended <input-group> on the <input> box should update based on the results of the test defined in 
 * the scenario (positive or negative)
 *    
 */
class AthleteSpecialTests extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col>
                        <form>
                            <div className="form-group"> 
                                    {/* Special Test 1, example of a negative test */}
                                    <label>Special Test 1:</label>
                                    <div className="input-group mb-3">
                                        <input id="specialTest1" type="text" className="form-control" placeholder="Compression"></input>
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-primary">-</span>
                                        </div>
                                    </div>

                                    {/* Special Test 2, example of a positive test */}
                                    <label>Special Test 2:</label>
                                    <div className="input-group mb-3">
                                        <input id="specialTest2" type="text" className="form-control " placeholder="Percussion"></input>
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-danger">+</span>
                                        </div>
                                    </div>

                                    {/* Special Test 3, example of a test before the "check" button is clicked */}
                                    <label>Special Test 3:</label>
                                    <div className="input-group mb-3">
                                        <input id="specialTest3" type="text" className="form-control " placeholder="Talar Tilt"></input>
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-success">O</span>
                                        </div>
                                    </div>


                            </div>

                                {/* Check Button. This should turn the Special Test 3 example to a postive or negative result */}
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