import React from 'react';
import {contractJSON} from '../lib/tokenService';

export const Contract = (props) => (
  <div className="contract">
    {contractJSON(props.web3)}
  </div>
); 