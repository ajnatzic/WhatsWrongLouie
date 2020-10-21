import React, { Component } from 'react';

class ScenarioReview extends Component {
    state = {  }
    render() { 
        return ( <div className="review">
            <h2>Review</h2>
            <p>The athlete has a broken leg and needs a cast.</p>
            <h2>History</h2>
            <p>This is where the full story goes. The athlete stopped his fall with his arm. He thinks his arm is broken.</p>
            <li>Story: Incorrect</li>
            <li>Arm: Correct</li>
            <h2>Observation</h2>
            <p>Two observation points</p>
            <li>Info: The athlete has a fracture in their right arm. X: 12.1, Y: 25.3</li>
            <li>Image: brokenarm.png . X: 12.4, Y: 25.5</li>
            <h2>Palpation</h2>
            <p>One palpation point</p>
            <li>Condition: Fractured Arm, Max Pain: 10, X: 12.1, Y: 25.3</li>
            <h2>Range of Motion</h2>
            <p>Limited movement in Active and Passive.</p>
            <li>Active: Right Wrist</li>
            <li>Passive: Right Wrist</li>
            <h2>Special Test</h2>
            <p>There is one special test.</p>
            <li>Wrist Test</li>
            <h2>Treatment/Assessment</h2>
            <p>Broken Arm, refer to XRay.</p>
        </div> );
    }
}
 
export default ScenarioReview;