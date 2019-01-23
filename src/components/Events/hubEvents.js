import React from 'react'

export default function HubEvents({ match }) {
  return (
    <div style={{color: 'black', minHeight: '100vh', border: '1px solid red'}}>
      This is {`${match.params.hubId}`} event page.
      {console.table('hey saransh')}
    </div>
  )
}
