import React, { Component } from 'react';
import InventoryItem from './InventoryItem'


class FilterList extends React.Component {

  filter (inventory) {
    if (!this.props.filter) {
      return inventory;
    }
    return inventory.filter((ingredient) => ingredient.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0)
  }

  testPost(){
    fetch('/api/inventory/postTestInventory', {
    method: 'post'
    }).then(function(response) {
      console.log(response.json());
    }).then(function(data) {
      console.log('Created Gist:', data);
    });
  }

  render () {
    let filteredInventory = this.filter(this.props.inventory);
    return (
      <ul class="list-group">
      {filteredInventory.length ? (
            filteredInventory.map((inventoryItem) => <InventoryItem name={inventoryItem.name} category={inventoryItem.category} age={inventoryItem.age} storage={inventoryItem.storage} daysLeft={6}></InventoryItem>)
        ):(
          <li class = "list-group-item">No results found, add something to your inventory?</li>
        )
      }
      <button class ="btn btn-lg" onClick={()=>this.testPost()}>Test Post!</button>
      </ul>
    )
  }
}

export default FilterList;


//{this.filter(this.props.inventory)
//    .map((inventoryItem) => <InventoryItem name={inventoryItem}></InventoryItem>)}
