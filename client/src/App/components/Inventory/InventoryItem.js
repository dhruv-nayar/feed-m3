import React, { Component } from 'react';

class InventoryItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      age: props.age,
      category: props.category,
      storage: props.storage
    }
  }

  render(){
    return(
      <li class="list-group-item">
          <span>{this.state.name}</span>
          <button class="btn btn-default btn-xs float-right remove-item">
          <span class="glyphicon glyphicon-remove"></span>
        </button>
      </li>
    )
  }
}

export default InventoryItem;
