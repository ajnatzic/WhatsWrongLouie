'use strict';

class AthleteCreator extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
                /* Begin Athlete Creation Screen  */

    <form action ="/ath_create" method = "post" style="max-width=500px">

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" >Name</span>
      </div>
      <input type="text" name="name" id="name" class="form-control modifiedInfo"  aria-label="Username" aria-describedby="basic-addon1" required></input>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Gender</span>
      </div>
      <select name="gender" id="gender" class="form-control" required>
        <option selected>Choose...</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Race</span>
      </div>
      <select name="race" id="race" class="form-control" required>
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
      <select name="skinColor" id="skinColor" class="form-control" required>
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
      <select name="shirtColor" id="shirtColor" class="form-control">
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
      <select name="pantColor" id="pantColor" class="form-control">
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
        <span class="input-group-text">Prior Injury</span>
      </div>
      <input type="text" name="priorInjury" class="form-control modifiedInfo"  aria-label="Username" aria-describedby="basic-addon1"></input>
    </div>

    
    </form>

        );
    }
}

