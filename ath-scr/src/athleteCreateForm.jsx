import React, { Component } from 'react';

class AthleteCreateForm extends Component {
    render() {
        return (
            <form>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" >Name</span>
                    </div>
                    <input type="text" id="name" dataTarget="#aCreateButton" class="form-control modifiedInfo" aria-label="Username" aria-describedby="basic-addon1"></input>


                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Gender</span>
                        </div>
                        <select id="gender" class="form-control">
                            <option selected></option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Race</span>
                        </div>
                        <select id="race" class="form-control">
                            <option selected>Choose...</option>
                            <option>American Indian or Alaska Native</option>
                            <option>Asian</option>
                            <option>Black or African American</option>
                            <option>Hispanic or Latino</option>
                            <option>Native Hawaiian or Other Pacific Islander</option>
                            <option>White</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Skin Color</span>
                        </div>
                        <select id="skinColor" class="form-control">
                            <option selected>Choose...</option>
                            <option>Russet</option>
                            <option>Peru</option>
                            <option>Fawn</option>
                            <option>Mellow Apricot</option>
                            <option>Navajo White</option>
                            <option>Pale</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Shirt Color</span>
                        </div>
                        <select id="shirtColor" class="form-control">
                            <option selected>Choose...</option>
                            <option>Blue</option>
                            <option>Red</option>
                            <option>Black</option>
                            <option>Yellow</option>
                            <option>Purple</option>
                            <option>White</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Pants Color</span>
                        </div>
                        <select id="pantColor" class="form-control">
                            <option selected>Choose...</option>
                            <option>Blue</option>
                            <option>Red</option>
                            <option>Black</option>
                            <option>Yellow</option>
                            <option>Purple</option>
                            <option>White</option>
                        </select>
                    </div>
                </div>
                <input type="submit" class="btn btn-primary" id="submitDetails" name="submitDetails" value="Submit"></input>
            </form>
        );
    }
}

export default AthleteCreateForm;