import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';

import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    const { fetchStream: _fetchStream, streamId } = this.props;

    _fetchStream(streamId);
  }

  render() {
    const { streamId, streams } = this.props;
    const stream = streams[streamId];
    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{stream.title}</h1>
        <div>{stream.description}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  streamId: ownProps.match.params.id,
  streams: state.streams,
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);

StreamShow.defaultProps = {
  streamId: null,
};

StreamShow.propTypes = {
  fetchStream: PropTypes.func.isRequired,
  streams: PropTypes.objectOf(object).isRequired,
  streamId: PropTypes.string,
};
