import React from 'react';

function ListView({ changeView, selectLead, leads, setLeads }) {
  async function sortBy(e) {
    const newLeads = leads.slice()
    const sorted = await newLeads.sort((a, b) => {
      if (a.address.city.slice(0, 4) < b.address.city.slice(0, 4)) { return -1; }
      if (a.address.city.slice(0, 4) > b.address.city.slice(0, 4)) { return 1; }
      return 0;
    })
    setLeads(sorted)
  }

  return (
    <div className="leads">
      <div className="filter">
        filter by:
        <select onChange={sortBy}>
          <option>...select filter...</option>
          <option value="city">city</option>
        </select>
      </div>
      <div className="list">
        <div className="row header">
          <div>Name</div>
          <div>Company</div>
          <div>City</div>
          <div>Email</div>
          <div>Phone</div>
        </div>
        {
          leads.map((l, i) => (
            <div key={i} className="row">
              <div 
                className="leadName"
                data-name="Lead"
                onClick={(e) => {
                  console.log(e.target.name);
                  
                  selectLead(l)
                  changeView(e)
              }}>{l.leadName}</div>
              <div>{l.company}</div>
              <div>{l.address.city}</div>
              <div>{l.email}</div>
              <div>{l.phone}</div>
            </div>
          ))
        }
      </div>
    </div>
)}

export default ListView