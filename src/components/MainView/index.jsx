import React from 'react';
import GossipList from '../GossipList';
import GossipCreator from '../GossipCreator';
import './mview.css';

const MainView = () => (
  <div className="main-view">
    <h1>Los Chismes</h1>
    <h4>Últimos Chismes:</h4>
    <GossipList />
    <h4>Nuevo Chisme:</h4>
    <GossipCreator />
  </div>
);

export default MainView;
