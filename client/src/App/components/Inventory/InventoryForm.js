import React, { Component } from 'react';
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addInventory } from "../../../redux/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addInventory: inventory => dispatch(addInventory(inventory))
  };
}

const mapStateToProps = state => {
  return { inventory: state.inventory };
};

class InventoryForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      Food: null,
      Quantity: null,
      PurchaseDate: null,
      Storage: null,
      Category: null,
      fullInventory: this.props.inventory
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
     console.log();
     this.setState({fullInventory : nextProps.inventory})
    }

  addItem(){
    console.log("item added: "+this.state.Food);
  }

  handleChange(event){
    this.setState({[event.target.name]:[event.target.value]}, ()=>{console.log(this.state);});
  }

  handleSubmit(event) {
    event.preventDefault();
    const inventoryName = this.state.Food[0]
    const inventoryAge = 14;
    const inventoryCategory = this.state.Category[0];
    const inventoryStorage = this.state.Storage[0];
    const inventoryQuantity = this.state.Quantity[0];
    const id = uuidv1()
    this.props.addInventory({ "id": id,
                              "name": inventoryName,
                              "age": inventoryAge,
                              "category": inventoryCategory,
                              "storage": inventoryStorage,
                              "quantity": inventoryQuantity},()=>{console.log("updated inventory:"+this.state.fullInventory)});
  }

  render(){
    return(
      <div>
      <h3>Add Inventory</h3>
        <form onSubmit = {this.handleSubmit}>
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
              <input type="text" name = "Category" class="form-control form-control-lg" placeholder="Category" onChange = {this.handleChange}/>
            </div>
            <div class="col">
              <button class="btn btn-primary btn-lg" type="submit"><span class = "glyphicon glyphicon-ok"/></button>
            </div>

          </div>
        </form>
        {this.state.fullInventory.map((inventoryItem)=>(<div id = {inventoryItem.name}>{inventoryItem.name}</div>))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryForm);;
