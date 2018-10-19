import React from 'react';
import { connect } from 'react-redux';
import Gossip from '../Gossip';
import * as selectors from '../../reducers';

const GossipList = ({
  gossips,
}) => (
  gossips.map(id => (
    <Gossip id={id} />
  ))
);

export default connect(
  state => ({
    gossips: selectors.getGossipIds(state),
  }),
)(GossipList);
