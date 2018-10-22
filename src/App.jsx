/* Contenedor principal de la aplicaciones
 * con las rutas necesarias */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainView from './components/MainView';
import GossipView from './components/GossipView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/:id?" component={MainView} />
        <Route path="/detail/:id" component={GossipView} />
      </div>
    );
  }
}

export default App;
