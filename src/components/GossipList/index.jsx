import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Gossip from '../Gossip';
import * as selectors from '../../reducers';
import * as actions from '../../actions';

class GossipList extends React.Component {
  componentWillMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { gossips } = this.props;
    if (gossips.length === 0) {
      return 'No se han encontrado chismes!';
    }
    return gossips.map(id => (
      <Gossip id={id} key={id} />
    ));
  }
}

GossipList.propTypes = {
  gossips: PropTypes.arrayOf(String).isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    gossips: selectors.getGossipIds(state),
  }),
  dispatch => ({
    fetchData() {
      dispatch(actions.fetchGossips());
    },
  }),
)(GossipList);
