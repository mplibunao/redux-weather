import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

  renderWeather(cityData){
    const {id} =  cityData.city;
    const {lat, lon} = cityData.city.coord;
    const temp = cityData.list.map(weather => weather.temp.day);
    const pressure = cityData.list.map(weather => weather.pressure);
    const humidity = cityData.list.map(weather => weather.humidity);
    
    return (
      <tr key={id}>
        <td>
          <div>
            <GoogleMap lon={lon} lat={lat} />
          </div>
        </td>
        <td><Chart data={temp} color="black" units="C" /></td>
        <td><Chart data={pressure} color="blue" units="hPa" /></td>
        <td><Chart data={humidity} color="green" units="%" /></td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
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

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);