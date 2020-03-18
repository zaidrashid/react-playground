import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

StreamCreate.propTypes = {
  createStream: PropTypes.func.isRequired,
};
