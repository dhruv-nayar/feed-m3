import React, { Component } from 'react';
import InventoryItem from './InventoryItem'



class FilterList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fullInventory: this.props.inventory
    }
  }

  removeItem(itemToRemove){
    var arr = this.state.fullInventory.filter((ingredient)=> ingredient.name != itemToRemove.name);
    this.setState({fullInventory:arr},()=>{console.log('item removed: '+JSON.stringify(itemToRemove)); console.log(this.state.list)})
  }

  filter (inventory) {
    if (!this.props.filter) {
      return inventory;
    }
    return inventory.filter((ingredient) => ingredient.name.toLowerCase().search(this.props.filter.toLowerCase()) != -1)
  }

  testPost(){
    fetch('/api/inventory/updateTest', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({"inventory":[
         {'name':'eggs', 'age':'14', 'category':'produce', 'storage':'fridge', 'quantity':'4oz'},
        {'name':'broccoli', 'age':'14', 'category':'produce', 'storage':'fridge', 'quantity':'4oz'},
        {'name':'cheese', 'age':'14', 'category':'produce', 'storage':'pantry', 'quantity':'4oz'},
  			{'name':'bacon', 'age':'14', 'category':'produce', 'storage':'pantry', 'quantity':'4oz'},
        {'name':'artichoke', 'age':'14', 'category':'produce', 'storage':'pantry', 'quantity':'4oz'}
      ]})
    }).then(function(response) {
      console.log(response.json());
    }).then(function(data) {
      console.log('Created Gist:', data);
    });
  }

  render () {
    var filteredInventory = this.filter(this.state.fullInventory)

    return (
      <ul class="list-group">
      {console.log(filteredInventory)}
      {filteredInventory.length ? (
            filteredInventory.map((inventoryItem) => <InventoryItem removeItem={this.removeItem.bind(this)} key={inventoryItem.name+inventoryItem.age+inventoryItem.quantity} fullJSON={inventoryItem} name={inventoryItem.name} category={inventoryItem.category} age={inventoryItem.age} storage={inventoryItem.storage} daysLeft={12}></InventoryItem>)
        ):(
          <li className = "list-group-item">No results found, add something to your inventory?</li>
        )
      }
      <button className ="btn btn-lg" onClick={()=>this.testPost()}>Test Post!</button>
      </ul>
    )
  }
}

export default FilterList;


//{this.filter(this.props.inventory)
//    .map((inventoryItem) => <InventoryItem name={inventoryItem}></InventoryItem>)}
