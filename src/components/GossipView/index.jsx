import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import * as selectors from '../../reducers';

const GossipView = ({
  id,
  title,
  description,
}) => (
  <div className="gossip-view">
    <h1>{title}</h1>
    <h2>
      Chisme
      {' '}
      {id}
    </h2>
    <p>{description}</p>
  </div>
);

GossipView.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withRouter(connect(
  (state, { match }) => ({
    ...selectors.getGossip(state, match.params.id),
  }),
  undefined,
)(GossipView));
