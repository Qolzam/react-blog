//Import components
import React, {Component} from 'react';

// Create navigation class
export default class Navigation extends Component {

  render(){
    return (
      <div className="row">
        <ul className="menu">
          <li><a href="#">Item one</a></li>
          <li><a href="#">Item two</a></li>
          <li><a href="#">Item three</a></li>
        </ul>
      </div>
    );
  }

};
