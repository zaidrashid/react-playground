import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {
    state = { lat: null , errorMessage: undefined};

    componentDidMount() {
        console.log('component did mount');
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
                console.log(position);
            },
            err => {
                console.log(err);
                this.setState({errorMessage: err.message});
            }
        );
    }

    render() {
        console.log(this.state);
        if (!this.state.errorMessage && !this.state.lat) {
            return <LoadingSpinner message="Please wait while we detect your location... "/>
        }

        if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        return <SeasonDisplay lat={this.state.lat} />
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)