import React, { Component } from 'react';


class AthleteTeamScreen extends Component {
    render() {
        return (
            <div className="container">
                <button id="treatButton" type="button" className="btn btn-danger btn-lg float-left">Back</button>
                {/* TODO: add "teams label" between these two buttons */}
                <button id="teamButton" type="button" className="btn btn-success btn-lg float-right">Team</button>

                
                <form>
                    <div class="form-group">
                        
                        {/* Athlete example GREY: The athlete is inactive due to suspension.*/}
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-secondary"></span>
                            </div>
                            <input type="text" class="form-control bg-dark text-light" defaultValue="James (3 weeks)" disabled></input>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">X</button>
                            </div>


                        </div>

                        {/* Athlete examples GREEN: The athlete is currently active */}
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-success"></span>
                            </div>
                            <input type="text" class="form-control bg-dark text-light" defaultValue="Mary (Active)" disabled></input>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">X</button>
                            </div>
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-success"></span>
                            </div>
                            <input type="text" class="form-control bg-dark text-light" defaultValue="Dante (Active)" disabled></input>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">X</button>
                            </div>
                        </div>


                        {/* Athlete examples RED: The athlete is injured and is waiting for aid. */}
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-danger"></span>
                            </div>
                            <input type="text" class="form-control bg-dark text-light" defaultValue="Jeremy (Injured)" disabled></input>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">X</button>
                            </div>
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-danger"></span>
                            </div>
                            <input type="text" class="form-control bg-dark text-light" defaultValue="Hannah (Injured)" disabled></input>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">X</button>
                            </div>
                        </div>

                        

                        {/* Add athlete button */}
                        <div class="input-group mb-3">
                        <button type="button" class="btn btn-primary btn-lg btn-block">Add new athlete</button>
                        </div>
                    </div>
                </form>


                <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left">References</button>
                <button id="settingsButton" type="button" className="btn btn-secondary btn-lg float-right">Settings</button>
            </div>);
    }
}

export default AthleteTeamScreen;