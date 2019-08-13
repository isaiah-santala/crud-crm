import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HomeView from './components/HomeView';
import ListView from './components/ListView';
import MapView from './components/MapView';
import LeadView from './components/LeadView';
import './App.css';

function App() {
  const [view, setView] = useState('Home')
  const [leads, setLeads] = useState([])
  const [lead, setLead] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/leads')
      .then(newLeads => newLeads.json())
      .then(newLeads => setLeads(newLeads))
      .catch(console.log)
  }, [])

  function changeView(e) {
    setView(e.target.getAttribute('data-name'))
  }

  function selectLead(selectedLead) {
    setLead(selectedLead)
  }

  return (
    <div className="app">
      <NavBar changeView={changeView}/>
      {view === 'Home' && 
        <HomeView/>}
      {view === 'Leads' && 
        <ListView 
          leads={leads}
          changeView={changeView}
          selectLead={selectLead}
          setLeads={setLeads}
        />}
      {view === 'Lead' &&
        <LeadView 
          lead={lead}
        />}
      {view === 'Map' &&
        <MapView 
          leads={leads}
        />} 
    </div>
  );
}

export default App;
