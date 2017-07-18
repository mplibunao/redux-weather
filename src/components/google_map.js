/* eslint-disable no-undef */

import React, { Component } from 'react';
//import scriptLoader from 'react-async-script-loader';

//scriptLoader('https://maps.googleapis.com/maps/api/js?key=AIzaSyCeS0ONZ-_z1FP6jiLTzjZutI3qnU9HQ6s')([GoogleMap]);
class GoogleMap extends Component{

  componentDidMount(){
    
    const map = new google.maps.Map(this.refs.map, {
      zoom: 16,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
    google.maps.event.trigger(map, 'resize');
  }

  render(){
    return (
      <div ref="map" />
    );
  }
}

export default GoogleMap;