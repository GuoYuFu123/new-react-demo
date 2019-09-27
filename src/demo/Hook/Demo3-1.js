import React, { useContext } from 'react';
import { myContext } from './Demo3';

function Demo31 () {
  const value = useContext(myContext);
  console.log(value);
  return (<div>{value}</div>);
}

export default Demo31;
