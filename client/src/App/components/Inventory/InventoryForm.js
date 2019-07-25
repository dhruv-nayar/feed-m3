import React, { Component } from 'react';

class InventoryForm extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <h3>Add Inventory</h3>
        <form>
          <div class="form-row">
            <div class="col-5">
              <input type="text" class="form-control form-control-lg" placeholder="Food"/>
            </div>
            <div class="col">
              <input type="text" class="form-control form-control-lg" placeholder="Quantity"/>
            </div>
            <div class="col">
              <input type="text" class="form-control form-control-lg" placeholder="Purchase Date"/>
            </div>
            <div class="col">
              <input type="text" class="form-control form-control-lg" placeholder="Storage Place"/>
            </div>
            <div class="col">
              <button class="btn btn-primary btn-lg" type="submit"><span class = "glyphicon glyphicon-ok"/></button>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

export default InventoryForm;
