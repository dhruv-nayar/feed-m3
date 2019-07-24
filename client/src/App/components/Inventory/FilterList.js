import React, { Component } from 'react';
import InventoryItem from './InventoryItem'


class FilterList extends React.Component {

  filter (inventory) {
    if (!this.props.filter) {
      return inventory;
    }
    return inventory.filter((ingredient) => ingredient.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0)
  }
  render () {
    let filteredInventory = this.filter(this.props.inventory);
    return (
      <ul class="list-group">
      {filteredInventory.length ? (
            filteredInventory.map((inventoryItem) => <InventoryItem name={inventoryItem.name}></InventoryItem>)
        ):(
          <li class = "list-group-item">No results found, add something to your inventory?</li>
        )
      }
      </ul>
    )
  }
}

export default FilterList;


//{this.filter(this.props.inventory)
//    .map((inventoryItem) => <InventoryItem name={inventoryItem}></InventoryItem>)}
