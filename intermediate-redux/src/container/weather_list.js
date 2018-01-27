import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/google-map';

class WeatherList extends Component {
    renderWeather({ city, list }) {
        const temps = list.map((data) => data.main.temp);
        const humidity = list.map((data) => data.main.humidity);
        const pressure = list.map((data) => data.main.pressure);
        const { lon, lat } = city.coord;

        return (
            <tr key={city.id}>
                <td><GoogleMaps lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color="blue" units="K" />
                </td>
                <td>
                    <Chart data={humidity} color="red" units ="hPa"/>
                </td>
                <td>
                    <Chart data={pressure} color="green" units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (HpA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

/**
 * @param  {Object} state the container state
 * @returns {Object} the object of redux state
 */
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);