import React, { Component } from 'react';

class Inventory extends Component {
    // Initialize the state
    constructor(props){
      super(props);
      this.state = {
        list: []
      }
    }

    // Fetch the list on first mount
    async componentDidMount() {
      this.getList();
    }

    //Tries to get the list of names from postgres
    getList = () => {
      fetch('/api/inventory/testPostgres')
      .then(res => res.json())
      .then(list => this.setState({ list }));
    }

    render() {
      const { list } = this.state;

      return (
        <div>
          <h1>List of Items</h1>
          {/* Check to see if any items are found*/}
          {list.length ? (
            <div>
              {/* Render the list of items */}
              {list.map((item) => {
                return(
                  <div>
                    {item.name}
                  </div>
                );
              })}
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

  export default Inventory;
