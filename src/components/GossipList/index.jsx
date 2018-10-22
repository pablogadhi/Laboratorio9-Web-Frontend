import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Gossip from '../Gossip';
import * as selectors from '../../reducers';
import * as actions from '../../actions';
import './glist.css';

class GossipList extends React.Component {
  componentWillMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const {
      gossips, match: { params }, deleteGossip, history,
    } = this.props;
    if (params.id !== undefined) {
      deleteGossip(params.id);
      history.replace('/');
    }
    return (
      <div className="gossip-list">
        {
          gossips.length === 0
            ? 'No se han encontrado chismes!'
            : gossips.map(id => (
              <Gossip id={id} key={id} />
            ))
        }
      </div>
    );
  }
}

GossipList.propTypes = {
  gossips: PropTypes.arrayOf(String).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  deleteGossip: PropTypes.func.isRequired,
};

export default withRouter(connect(
  state => ({
    gossips: selectors.getGossipIds(state),
  }),
  dispatch => ({
    fetchData() {
      dispatch(actions.fetchGossips());
    },
    deleteGossip(id) {
      dispatch(actions.deleteGossip(id));
    },
  }),
)(GossipList));
