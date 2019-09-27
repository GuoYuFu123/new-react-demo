import React from 'react';

import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Demo5 from './Demo5';
import Demo6 from './Demo6';
class index extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    return (
      <div>
        <Demo1 />
        {/* <Demo2 page="1"/> */}
        {/* <Demo3 /> */}
        {/* <Demo4 /> */}
        {/* <Demo5 /> */}
        {/* <Demo6 /> */}
      </div>
    );
  }
}

export default index;
