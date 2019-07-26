import React, { Component } from 'react';

class InventoryForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      Food: null,
      Quantity: null,
      PurchaseDate: null,
      Storage: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  addItem(){
    console.log("item added: "+this.state.Food);
  }

  handleChange(event){
    this.setState({[event.target.name]:[event.target.value]}, ()=>{console.log(this.state);});
  }

  render(){
    return(
      <div>
      <h3>Add Inventory</h3>
        <form>
          <div class="form-row">
            <div class="col-5">
              <input type="text" name = "Food" class="form-control form-control-lg" placeholder="Food" onChange = {this.handleChange}/>
            </div>
            <div class="col">
              <input type="text" name = "Quantity" class="form-control form-control-lg" placeholder="Quantity" onChange = {this.handleChange}/>
            </div>
            <div class="col">
              <input type="text" name = "PurchaseDate" class="form-control form-control-lg" placeholder="Purchase Date" onChange = {this.handleChange}/>
            </div>
            <div class="col">
              <input type="text" name = "Storage" class="form-control form-control-lg" placeholder="Storage Place" onChange = {this.handleChange}/>
            </div>
            <div class="col">
              <button class="btn btn-primary btn-lg" type="submit" onSubmit = {this.addItem}><span class = "glyphicon glyphicon-ok"/></button>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

export default InventoryForm;
