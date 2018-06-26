import React from 'react';

export const Bluzelle = (props) => (
  <div style={{padding: '1em', margin: '1em', border: '1px solid black'}}>
    <h1>Bluzelle Keys</h1>
    <button onClick={() => props.handleBluzelleKeys()}>Show Keys</button>
    <p>{props.bluzelle}</p>
  </div>
); 
