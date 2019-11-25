import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyGoogleMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `15.05vw`, width: '21.8vw' }} />,
    mapElement: <div style={{ height: `100%`, width: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={props.geo}
  >
    {props.isMarkerShown && <Marker position={props.geo} />}
  </GoogleMap>
);

export default MyGoogleMap;
