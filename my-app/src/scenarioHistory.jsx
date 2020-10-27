import React, { Component } from 'react';

class NewHistory extends Component {
    state = {  }
    render() { 
        return ( <form>
            <div class="form-group">
                <h1>History</h1>
              <label for="exampleFormControlTextarea1">Story</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Keyword 1 </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Correct: </label>
              <input type="checkbox" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Keyword 2 </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" "></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Correct: </label>
              <input type="checkbox" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Keyword 3 </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" "></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Correct: </label>
              <input type="checkbox" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
            </div>
          </form> );
    }
}
 
export default NewHistory;