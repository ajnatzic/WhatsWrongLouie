import React, { Component } from 'react';

class AthleteTreatmentScreen extends Component {
    render() {
        return (
                <div className="my-10"> {/* TODO: change p tags to labels */}
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


                    <button type="submit" class="btn btn-primary float-left mt-3">Submit</button>
                </div>
        );
    }
}

export default AthleteTreatmentScreen;