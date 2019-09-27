import React, { useState, useEffect } from 'react';

/**
 *
 * @param {*} useState
 */
var timer = null;
function Example () {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('change=' + count);
    document.title = `${count} 下`;
  }, [count]);
  useEffect(() => {
    console.log('组件mounted');
    // timer = setInterval(() => {
    //     setCount((pre) => {
    //         console.log('之前的preCount=' + pre);
    //         return pre+1;
    //     });
    // }, 2000);
    return () => {
      console.log('components 销毁');
      clearInterval(timer);
    };
  });
  const [page, setPage] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
          Click me
      </button>
      <p>You clicked {page} times</p>
      <button onClick={() => setPage(page + 1)}>
          page
      </button>
    </div>
  );
}
function Test () {
  const [num, setNum] = useState(10);
  return (<div>{num}</div>);
}
class Demo1 extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    return (
      <div>
        <Example />
        <Test />
      </div>
    );
  }

  componentDidMount () {
    console.log(this.state);
  }
}

export default Demo1;
