import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    <Link to={`/detail/${id}`}>Leer más</Link>
    <Link to={`${id}`}>x borrar</Link>
  </div>
);

Gossip.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getGossip(state, id),
  }),
  undefined,
)(Gossip);
