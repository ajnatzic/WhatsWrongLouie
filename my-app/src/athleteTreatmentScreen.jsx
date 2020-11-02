import React, { Component } from 'react';

class AthleteTreatmentScreen extends Component {
    render() {
        return (
            <div className="container">
                
                {/* Back Button */}
                <div className="row">
                    <button id="treatButton" type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                    <div className="p-3 w-auto my-2 bg-secondary text-white">Treatment</div>
                </div>
            {/* TODO: change p tags to labels */}
                <div className="my-10">
                    <p className="text-left">
                    Police: protect will determine if and how the athlete should protect themselves during their injury.
                    </p>

                    <div class="input-group">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>

                    <p className="text-left">
                    Optimal Load: tells the athlete how much load they should put on the injury.
                    </p>

                    <div class="input-group">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>

                    <p className="text-left">
                    ICE: determines if this injury is an emergency and the athlete requires immediate attention.
                    </p>

                    <div class="input-group">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>

                    <p className="text-left">
                    Compress: tells the athlete if they should use a cold or hot compress and how often should they do so
                    </p>

                    <div class="input-group">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>

                    <p className="text-left">
                    Elevate: advises the athlete if they should elevate their injury and for how long.
                    </p>

                    <div class="input-group">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>


                {/* Submit Button */}
                <button type="submit" class="btn btn-primary float-left mt-3">Submit</button>
                
                </div>

                <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left">References</button>
            </div>
        );
    }
}

export default AthleteTreatmentScreen;