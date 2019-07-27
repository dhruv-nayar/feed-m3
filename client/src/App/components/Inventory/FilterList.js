import React, { Component } from 'react';
import InventoryItem from './InventoryItem'
import { connect } from "react-redux";
import { overwriteInventory } from "../../../redux/actions/index";

//this function ties the overwriteInventory function from redux to the "props" for FilterList
function mapDispatchToProps(dispatch) {
  return {
    overwriteInventory: inventory => dispatch(overwriteInventory(inventory))
  };
}

//this function ties the state.inventory from Redux to the "props" for FilterList
const mapStateToProps = state => {
  return { inventory: state.inventory };
};

class FilterList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fullInventory: this.props.inventory
    }
  }

  //updates the inventory props if the Redux inventory gets updated
  componentWillReceiveProps(nextProps) {
     console.log();
     this.setState({fullInventory : nextProps.inventory})
    }

  //activated if the "remove" button is clicked on any specific inventory item; updates state and sends the update to Redux
  removeItem(itemToRemove){
    var arr = this.state.fullInventory.filter((ingredient)=> ingredient.name != itemToRemove.name);
    this.setState({fullInventory:arr},()=>{this.props.overwriteInventory(arr)})
  }

  //returns a filtered version of the inventory list if users search for a specific item
  filter (inventory) {
    if (!this.props.filter) {
      return inventory;
    }
    return inventory.filter((ingredient) => ingredient.name.toLowerCase().search(this.props.filter.toLowerCase()) != -1)
  }

  //post call to node for testing purposes; post and get requests likely to be moved to Redux
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
            filteredInventory.map((inventoryItem) => <InventoryItem removeItem={this.removeItem.bind(this)} key={inventoryItem.id} fullJSON={inventoryItem} name={inventoryItem.name} category={inventoryItem.category} age={inventoryItem.age} storage={inventoryItem.storage} daysLeft={12}></InventoryItem>)
        ):(
          <li className = "list-group-item">No results found, add something to your inventory?</li>
        )
      }
      <button className ="btn btn-lg" onClick={()=>this.testPost()}>Test Post!</button>
      </ul>
    )
  }
}

//connect ties the redux state variables and redux functions into the props for the FilterList component
export default connect(mapStateToProps,mapDispatchToProps)(FilterList);
