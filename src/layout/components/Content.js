import React from 'react';
import styles from '../styles/index.less';

class Content extends React.Component {
  constructor() {
    super();
    this.state ={};
  }

  render() {
    return <div className={styles['contenter']}>content</div>;
  }

  componentDidMount() {
  }
}

export default Content;
