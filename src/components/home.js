import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from "./searchBar";
import RecentPosts from './recentPosts';

import { connect } from 'react-redux';
import * as actions from '../actions';

export default class Home extends Component {
  handleSearchBarSubmit(query) {
    
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


export default connect(null,actions)(Home);