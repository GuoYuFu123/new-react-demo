import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Page from '../page/Page';

class Children extends React.Component {
  constructor () {
    super();
    this.state = { someKey: 'someValue' };
  }

  render () {
    return <div>
        测试一下
      {/* {this.props.children} */}
      <Switch>
        <Route exact path="/testchildren/test" component={Page} />
      </Switch>
    </div>;
  }

  componentDidMount () {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Children;
