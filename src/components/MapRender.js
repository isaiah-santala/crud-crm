import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapRender = withScriptjs(withGoogleMap(({ isMarkerShown, leads }) =>
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 39.8283, lng: -98.5795}}
    >
      {isMarkerShown && leads.map((e, i) => 
        <Marker 
          key={i} 
          position={{ lat: e.address.coordinates.lat, lng: e.address.coordinates.lng }} 
      />)}
    </GoogleMap>
))

export default MapRender