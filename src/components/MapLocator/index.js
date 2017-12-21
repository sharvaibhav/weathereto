import React, { Component } from 'react';
import {withScriptjs,withGoogleMap,GoogleMap, Marker } from "react-google-maps"

const MapLocator = withScriptjs(withGoogleMap(props=>{

    return(
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: props.center.lat, lng: props.center.lng }}
            onClick = {props.onClick}
            ref={props.onMapMounted}>            
        >
            <Marker
            position={{ lat: props.center.lat, lng: props.center.lng }}
            />
        </GoogleMap>
        
    )
}));

export default MapLocator;
