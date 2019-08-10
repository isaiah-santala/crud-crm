import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ListView from './components/ListView';
import MapView from './components/MapView';
import './App.css';

function App() {
  const [view, setView] = useState('Map')

  function changeView(e) {
    setView(e.target.name)
  }

  return (
    <div className="app">
      <NavBar changeView={changeView}/>
      {view === 'Leads' && <ListView />}
      {view === 'Map' && <MapView />}
      {view === '' && <h2>Select View</h2>}
    </div>
  );
}

export default App;
