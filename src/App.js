import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ListView from './components/ListView';
import MapView from './components/MapView';
import LeadView from './components/LeadView';
import './App.css';

function App() {
  const [view, setView] = useState('')
  const [leads, setLeads] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/leads')
      .then(newLeads => newLeads.json())
      .then(newLeads => setLeads(newLeads))
      .catch(console.log)
  }, [])

  function changeView(e) {
    setView(e.target.name)
  }

  return (
    <div className="app">
      <NavBar changeView={changeView}/>
      {view === '' && <h2>Select View</h2>}
      {view === 'Leads' && 
        <ListView 
          leads={leads}
          changeView={changeView}
        />}
      {view === 'Map' &&
        <MapView 
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `700px`, width: `75%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          leads={leads}
        />}
    </div>
  );
}

export default App;
