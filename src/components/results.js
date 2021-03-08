import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from "./searchBar";

class Results extends Component {
  handleSearchBarSumbmit(query) {
    console.log(query);
  }

  render() {
    return (
      <div>
        <Logo size={55}/>
        <SearchBar onSubmit={(query) => this.handleSearchBarSumbmit(query)}/>
      </div>
    )
  }
}
export default Results;