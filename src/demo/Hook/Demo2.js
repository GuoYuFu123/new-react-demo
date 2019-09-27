import React, { useState, useEffect } from 'react';

/**
 *
 * @param {*} useEffect
 * 1、如果组件多次渲染（通常如此），则在执行下一个 effect 之前，上一个 effect 就已被清除
 * 2、 useEffect 传递第二个参数，它是 effect 所依赖的值数组【数组变则effect触发】 return则是页面清楚的时候
 */
function PageDome (props) {
  console.log(props);
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log('updated page');
    return () => {
      console.log('销毁了 page');
    };
  }, [props.page]);
  useEffect(() => {
    console.log('updated state');
    return () => {
      console.log('销毁了 state');
    };
  }, [state]);
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>state++</button>
    </div>
  );
}
export default PageDome;
