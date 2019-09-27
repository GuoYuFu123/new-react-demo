import React from 'react';
import styles from '../styles/index.less';

class Side extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    return <div className={styles['side']}>side</div>;
  }

  componentDidMount () {
  }
}

export default Side;
