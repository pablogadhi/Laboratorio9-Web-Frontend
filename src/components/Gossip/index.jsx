import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';

const Gossip = ({
  id,
  title,
}) => (
  <div className="gossip">
      Chisme
    {' '}
    {id}
    {' '}
    {title}
    {' '}
    <a href={`gossips/view/${id}`}>leer más</a>
    <a href={`gossips/delete/${id}`}>x borrar</a>
  </div>
);

Gossip.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getGossip(state, id),
  }),
  undefined,
)(Gossip);
