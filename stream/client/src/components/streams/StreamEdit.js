import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import { fetchStream, updateStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { fetchStream: _fetchStream, streamId } = this.props;

    _fetchStream(streamId);
  }

  onSubmit = (formValues) => {
    const { updateStream: _updateStream, streamId } = this.props;
    _updateStream(streamId, formValues);
  };

  render() {
    const { streamId, streams } = this.props;
    const stream = streams[streamId];

    if (!stream) {
      return <div>Loading...</div>;
    }

    const { description, title } = stream;
    return (
      <div>
        <h3>Stream Edit</h3>
        <StreamForm
          initialValues={{ description, title }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  streamId: ownProps.match.params.id,
  streams: state.streams,
});

export default connect(mapStateToProps, { fetchStream, updateStream })(StreamEdit);

StreamEdit.defaultProps = {
  streamId: null,
};

StreamEdit.propTypes = {
  fetchStream: PropTypes.func.isRequired,
  updateStream: PropTypes.func.isRequired,
  streams: PropTypes.objectOf(object).isRequired,
  streamId: PropTypes.string,
};
