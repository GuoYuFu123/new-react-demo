import React, { createContext, useState, useEffect, useContext } from 'react';
import Demo31 from './Demo3-1';
// 1.使用createContext创建上下文
const myContext = createContext();
/**
 * useContext
 */
// 2、创建Provider
function TestUseContent (props) {
  let [userName, setUserName] = useState(0);
  function btnChange () {
    setUserName(userName + 1);
  }
  return (<myContext.Provider value={userName}>
    <button onClick={btnChange}>add</button>
    <Demo31 />
  </myContext.Provider>);
}

export { myContext };
export default TestUseContent;
