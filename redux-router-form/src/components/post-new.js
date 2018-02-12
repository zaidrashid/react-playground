import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { APP_ROUTES } from '../const/app-routes';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error
                ? 'has-danger'
                : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text" {...field.input} />
                    <div className="text-help">
                        {touched
                            ? error
                            : ''}
                    </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push(APP_ROUTES.ROOT);
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <Link className="btn btn-danger" to={APP_ROUTES.ROOT}>
                    Cancel
                </Link>
            </form>
        );
    }
}

/**
 * @param  {object} values values from redux-form
 * @returns {object} If errors is not empty, redux will block from sending form
 */
function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title';
    }

    if (!values.categories) {
        errors.categories = 'Enter a category';
    }

    if (!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    validate
})(connect(null, { createPost })(PostNew));
