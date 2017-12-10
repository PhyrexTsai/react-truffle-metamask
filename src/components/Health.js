import React from 'react';

export const Health = (props) => (
  <div style={{padding: '1em', margin: '1em', border: '1px solid black'}}>
    <h1>Health: {props.health}</h1>
    <button onClick={() => props.handleHealth()}>Health</button>
  </div>
); 