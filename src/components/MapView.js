import React, { useState } from 'react'
import MapRender from './MapRender'

function MapView({leads}) {
  const [city, setCity] = useState(leads)
  const [search, setSearch] = useState('')

  function searchCity() {
    const cloneLeads = leads.slice()
    const newCity = cloneLeads.filter(e => e.address.city === search)
    setCity(newCity)
  }

  return (

    <div className="map">
      <div className="search">
        <form onSubmit={(e) => {
          e.preventDefault()
          searchCity()
        }}>
          <h2>Search by city</h2>
          <input 
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          ></input>
        </form>
      </div>
      <MapRender
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        leads={city}
      />
    </div>
  )
}

export default MapView