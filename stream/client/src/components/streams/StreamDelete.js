import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends React.Component {
  constructor() {
    super();
    this.history = history;
  }

  componentDidMount() {
    const { fetchStream: _fetchStream, streamId } = this.props;

    _fetchStream(streamId);
  }

  onSubmit = () => {
    const { deleteStream: _deleteStream, streamId } = this.props;
    _deleteStream(streamId);
  };

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.onSubmit()}
          className="ui button negative"
        >
          Delete
        </button>
        <button
          onClick={() => this.history.push('/')}
          className="ui button"
        >
          Cancel
        </button>
      </React.Fragment>
    );
  }

  render() {
    const { streamId, streams } = this.props;
    const stream = streams[streamId];

    const contentText = stream ? `Are you sure you want to delete this stream? (${stream.title})` : 'Loading...';
    return (
      <Modal
        title="Delete Stream"
        content={contentText}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  streamId: ownProps.match.params.id,
  streams: state.streams,
});

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);

StreamDelete.defaultProps = {
  streamId: null,
};

StreamDelete.propTypes = {
  fetchStream: PropTypes.func.isRequired,
  deleteStream: PropTypes.func.isRequired,
  streams: PropTypes.objectOf(object).isRequired,
  streamId: PropTypes.string,
};
