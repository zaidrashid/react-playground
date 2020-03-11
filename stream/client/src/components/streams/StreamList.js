import React from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    const { fetchStreams: _fetchStreams } = this.props;
    _fetchStreams();
  }

  renderCreateStream() {
    const { isSignedIn } = this.props;
    if (!isSignedIn) {
      return '';
    }

    return (
      <div className="ui items">
        <div className="item">
          <div className="extra">
            <div className="ui right floated content">
              <Link to="/streams/create" className="ui button primary">Create Stream</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderAdmin(stream) {
    const { currentUserId } = this.props;

    if (stream.userId !== currentUserId) {
      return '';
    }

    return (
      <div className="right floated content">
        <Link
          to={`streams/edit/${stream.id}`}
          className="ui button primary"
        >
          Edit
        </Link>
        <button className="ui button negative">Delete</button>
      </div>
    );
  }

  renderList() {
    const { streams } = this.props;

    return (
      streams.map(stream => (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">{stream.title}</div>
          <div className="description">{stream.description}</div>
        </div>
      ))
    );
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateStream()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { fetchStreams })(StreamList);

StreamList.defaultProps = {
  streams: [],
  currentUserId: undefined,
  isSignedIn: false,
};

StreamList.propTypes = {
  fetchStreams: PropTypes.func.isRequired,
  streams: PropTypes.arrayOf(object),
  currentUserId: PropTypes.string,
  isSignedIn: PropTypes.bool,
};
