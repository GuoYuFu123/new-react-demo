import React, { useState, useMemo } from 'react';
/*
*useMemo
*/
function Button (obj) {
  function changeName (name) {
    console.log('11');
    return name + '改变name的方法';
  }
  //   无论name发生变化还是content发生变化，都会触发这个函数
  //   const otherName = changeName(obj.name);

  // 性能优化，只有name发生变化的时候才会调用这个方法(根据回调中的第二个参数来确定什么时候进行更新)
  const otherName = useMemo(() => changeName(obj.name), [obj.name]);
  return (
    <div>
      <div>{otherName}</div>
      <div>{obj.children}</div>
    </div>
  );
}

function App () {
  const [name, setName] = useState('名称');
  const [content, setContent] = useState('内容');
  return (<div>
    <button onClick={() => setName(new Date().getTime())}>name</button>
    <button onClick={() => setContent(new Date().getTime())}>content</button>
    <Button name={name}>{content}</Button>
  </div>);
}
export default App;
