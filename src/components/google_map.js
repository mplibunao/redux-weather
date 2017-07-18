/* eslint-disable no-undef */

import React, { Component } from 'react';
import { GoogleMapsLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
  return (
    <GoogleMapsLoader
      containerElement={ <div style={{height: '100%'}} /> }
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
    />
  );
}

/*
class GoogleMap extends Component{

  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render(){
    return (
      <div ref="map" />
    );
  }
}
*/