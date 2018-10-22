/* Componenete que representa un chisme en la lista */

import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../../reducers';
import './gossip.css';

const Gossip = ({
  id,
  title,
}) => (
  <div className="gossip">
    Chisme
    {' '}
    {id}
    {': '}
    {title}
    {' '}
    <Link to={`/detail/${id}`}>Leer más</Link>
    {' | '}
    <Link to={`${id}`}>borrar</Link>
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
