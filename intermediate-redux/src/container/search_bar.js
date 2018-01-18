import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(evt) {
        this.setState({ term: evt.target.value });
    }

    onFormSubmit(evt) {
        evt.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input
                    placeholder="Enter a city to get five-day forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}


function mapDispatchToProps(dispath) {
	return bindActionCreators({ fetchWeather }, dispath);
}

export default connect(null, mapDispatchToProps)(SearchBar);