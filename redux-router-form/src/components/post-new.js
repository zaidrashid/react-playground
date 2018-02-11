import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {
    renderField(field) {
        return (
        <div>
            <label>{field.label}</label>
            <input
                className="form-control"
                type="text" {...field.input} />
                {field.meta.touched
                    ? field.meta.error
                    : ''}
            </div>);
    }

    onSubmit(values) {
        console.log(values);
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
                <button type="submit" className="btn btn-primary">Submit</button>
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
})(PostNew);
