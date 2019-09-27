import React from 'react';
import Header from './Header';
import Side from './Side';
import Tag from './Tag';
import Content from './Content';
import styles from '../styles/index.less';

class Layout extends React.Component {
  constructor() {
    super();
    this.state ={};
  }

  render() {
    return (
    <div className={styles["layout-box"]}>
        <div className={styles["layout-top"]}>
            <Header />
        </div>
        <div className={styles["layout-contenter"]}>
            <Side />
            <div className={styles['layout-content']}>   
                <Tag />
                <Content />
            </div>
            
        </div>
        {/* <div>footer</div> */}
    </div>);
  }

  componentDidMount() {
   
  }
}

export default Layout;
