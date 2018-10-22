import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import uuid from 'uuid-v4';
import * as actions from '../../actions';
import './creator.css';

let GossipCreator = ({
  handleSubmit,
}) => (
  <form className="gossip-creator" onSubmit={handleSubmit}>
    <h5 className="creator-title">Título:</h5>
    <Field
      name="title"
      component="input"
      type="text"
    />
    <h5>Descripción:</h5>
    <Field
      name="description"
      component="textarea"
      rows="10"
      cols="50"
    />
    <button className="submit-button" type="submit">Publicar!</button>
  </form>
);

GossipCreator.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

GossipCreator = reduxForm({
  form: 'gossipForm',
})(GossipCreator);

export default connect(
  undefined,
  dispatch => ({
    onSubmit(values) {
      const { title, description } = values;
      dispatch(actions.createGossip(uuid(), title, description));
    },
  }),
)(GossipCreator);
