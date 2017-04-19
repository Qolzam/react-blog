//Import components
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

// Create navigation class
export default class Navigation extends Component {


 componentDidMount() {
   var modalMarkup =(

     <div className="top-bar">
   <div className="top-bar-title">
     <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
       <button className="menu-icon dark" type="button" data-toggle></button>
     </span>
     <strong>Site Title</strong>
   </div>
   <div id="responsive-menu">
     <div className="top-bar-left">
       <ul className="dropdown menu" data-dropdown-menu>
         <li>
           <a href="#">One</a>
           <ul className="menu vertical">
             <li><a href="#">One</a></li>
             <li><a href="#">Two</a></li>
             <li><a href="#">Three</a></li>
           </ul>
         </li>
         <li><a href="#">Two</a></li>
         <li><a href="#">Three</a></li>
       </ul>
     </div>
     <div className="top-bar-right">
       <ul className="menu">
         <li><input type="search" placeholder="Search"/></li>
         <li><button type="button" className="button">Search</button></li>
       </ul>
     </div>
   </div>
 </div>
   );

var $modal = $(ReactDOMServer.renderToString(modalMarkup));
$(ReactDOM.findDOMNode(this)).html($modal);
console.log("modal has been rendereds");
 }

  render() {
    return (
  <div>

  </div>
    );
  }

};
