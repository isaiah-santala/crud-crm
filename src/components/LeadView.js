import React from 'react'

function LeadView({lead}) {
  return (
    <div className="lead-details">
      <h1>{lead.leadName}</h1>
    </div>
  )
}

export default LeadView