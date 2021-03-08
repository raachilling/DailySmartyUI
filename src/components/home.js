import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from "./searchBar";
import RecentPosts from './recentPosts';

export default class Home extends Component {
  handleSearchBarSubmit(query) {
    console.log("trying to submit for query", query);
    this.props.history.push('/results');
  }

  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
          <SearchBar onsubmit={(query) => this.handleSearchBarSubmit(query)}/>
          <RecentPosts />
        </div>
      </div>
    );
  }
}
