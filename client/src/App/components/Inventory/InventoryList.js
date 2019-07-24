import React, { Component } from 'react';
import InventoryItem from './InventoryItem';
import FilterList from './FilterList';
import FilterSearch from './FilterSearch';

class InventoryList extends Component {
    // Initialize the state
    constructor(props){
      super(props);
      this.state = {
        list: [], //this will hold the list of inventory items
        filter: null //this will hold the string that the list of inventory items should be filtered on
      }
    }

    // Fetch the list on first mount
    async componentDidMount() {
      this.getList();
    }

    //if the text gets updated in the search box, then update our filter string to reflect that; this will impact the items that get shown in the inventory list
    updateSearch (inputValue) {
      let filter = this.state.filter;

      this.setState({
        filter: inputValue
      });
      console.log(inputValue);
    }

    //Tries to get the list of names from postgres
    getList = () => {
      fetch('/api/inventory/testPostgres')
      .then(res => res.json())
      .then(inventory => this.setState({list: inventory}));
    }

    render() {
      return (
        <div>
          <h1>Your Inventory</h1>
          {/* Check to see if any items are found*/}
          {this.state.list.length ? (
            <div>
            <FilterSearch updateSearch={this.updateSearch.bind(this)} searchText={this.state.filter} />
            <FilterList filter={this.state.filter} inventory={this.state.list}></FilterList>
            </div>
          ) : (
            <div>
              <h2>Loading</h2>
            </div>
          )
        }
        </div>
      );
    }
  }

  export default InventoryList;



  // <div>
  //   {/* Render the list of items */}
  //   {this.state.list.map((item) => {
  //     return(
  //       <InventoryItem name = {item.name} age = {item.age} category = {item.category} storage = {item.storage} />
  //     );
  //   })}
  // </div>
