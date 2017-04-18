// Add components refrences
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Navigation from 'Navigation'

// Create main class
export default class Main extends Component {

    render() {
          return (

              <div className="main">
                <Navigation/>
                  <h1>Hello Main!</h1>
              </div>

          );


    }

};
