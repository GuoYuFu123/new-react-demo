import React from 'react';
import styles from '../styles/index.less';

class Tag extends React.Component {
  constructor() {
    super();
    this.state ={};
  }

  render() {
    return <div className={styles['tag-box']}>Tag</div>;
  }

  componentDidMount() {
  }
}

export default Tag;
