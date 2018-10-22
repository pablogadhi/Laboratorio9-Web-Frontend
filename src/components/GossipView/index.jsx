import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import * as selectors from '../../reducers';
import * as actions from '../../actions';
import './gView.css';

class GossipView extends React.Component {
  componentWillMount() {
    const { fetchDescription } = this.props;
    fetchDescription();
  }

  render() {
    const {
      id, title, date, description,
    } = this.props;
    return (
      <div className="gossip-view">
        <h1>{title}</h1>
        <h4 className="id-ref">
      Chisme
          {' '}
          {id}
        </h4>
        <h5>
      Fecha:
          {' '}
          {date}
        </h5>
        <p>{description}</p>
      </div>
    );
  }
}

GossipView.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fetchDescription: PropTypes.func.isRequired,
};

export default withRouter(connect(
  (state, { match }) => ({
    ...selectors.getGossip(state, match.params.id),
    description: selectors.getDisplayDescription(state),
  }),
  (dispatch, { match }) => ({
    fetchDescription() {
      dispatch(actions.fetchGossipDescription(match.params.id));
    },
  }),
)(GossipView));
