import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Demo from '../Hook';
class Children extends React.Component {
  constructor () {
    super();
    this.state = { someKey: 'someValue' };
  }

  render () {
    console.log(this.props);
    return <div>
        asdjlksdfjljfslkjl
      <div>
          内容：
        {this.props.children}
      </div>
    </div>;
  }

  componentDidMount () {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Children;
