import * as React from 'react';
import './App.css';

import '../node_modules/metro4/build/css/metro-all.min.css';
import '../node_modules/metro4/build/js/metro.min.js';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App"> 
        <div className="tiles-grid tiles-group size-2" >
            <a href="#" data-role="tile" className="bg-indigo">
                <span className="mif-github icon" /> 
                <span className="branding-bar">Sepid Ganjeh</span>
                <span className="badge-bottom">30</span>
            </a>
            <div data-role="tile" className="bg-cyan">
                <span className="mif-envelop icon" /> 
                <span className="branding-bar">Sepid Star</span>
                <span className="badge-bottom">10</span>
            </div>
            <div data-role="tile" className="bg-orange" data-size="wide">
                <span className="mif-chrome icon"/> 
                <span className="branding-bar">Sepid System</span>
            </div>
            <div data-role="tile" data-size="small">
                <span className="mif-apple icon"/> 
            </div>
            <div data-role="tile" data-size="small" className="bg-red">
                <span className="mif-bell icon"/> 
            </div>
            <div data-role="tile" data-size="small" className="bg-teal col-1 row-6">
                <span className="mif-windows icon"/> 
            </div>
            <div data-role="tile" data-size="small" className="bg-brown col-2 row-6">
                <span className="mif-wind icon"/> 
            </div>
            <div data-role="tile" className="bg-cyan">
                <span className="mif-table icon"/> 
                <span className="branding-bar">Tables</span>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
