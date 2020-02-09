import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react'

export class Location extends Component{

    render(){
        return(
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 53.1169458, lng: 23.1436831}}
        />
        );
    }
}

const mapStyles = {
    width: '100%',
    height: '100%',
  };

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDMxwS8aRNtZBq0wpej-FIk1FNpxNWf3jQ'
  })(Location);