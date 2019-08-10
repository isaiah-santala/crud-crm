import React, { useState, useEffect } from 'react';

function ListView() {
  const [leads, setLeads] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/leads')
      .then(newLeads => newLeads.json())
      .then(newLeads => setLeads(newLeads))
      .catch(console.log)
  }, [])

  return (
    <div className="list">
      <div className="row">
        <div>Name</div>
        <div>Company</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Lead Source</div>
      </div>
      {
        leads.map((e, i) => (
          <div key={i} className="row">
            <div>{e.leadName}</div>
            <div>{e.company}</div>
            <div>{e.email}</div>
            <div>{e.phone}</div>
            <div>{e.leadSrc}</div>
          </div>
        ))
      }
    </div>
  )
}

export default ListView