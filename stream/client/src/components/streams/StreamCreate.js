import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { createStream } from '../../actions';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    // console.log('on submit ', formValues);
    this.props.createStream(formValues);
  }

  renderError = ({ error, touched }) => error && touched && (
    <div className="ui error message">
      <div className="header">
        {error}
      </div>
    </div>
  );


  renderTextField = ({
    input,
    label,
    meta,
  }) => {
    const inputId = `id-${input.name}`;
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label htmlFor={inputId}>{label}</label>
        <input id={inputId} {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        className="ui form error"
        onSubmit={handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderTextField}
          label="Enter Title"
        />
        <Field
          name="description"
          component={this.renderTextField}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);

StreamCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  createStream: PropTypes.func.isRequired,
};
