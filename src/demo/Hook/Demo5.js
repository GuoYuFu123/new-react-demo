import React, { useState, useCallback } from 'react';
/**
 * useCallback  相当于之前的() => cb()
 */
function Demo5 () {
  const [text, setText] = useState(0);
  const onSubmit = useCallback((obj) => {
    console.log('被调用' + text, obj);
    setText(text + 1);
  }, [text]);

  return (
    <div>
      <p>demo5</p>
      <p>{text}</p>
      <p><button onClick={() => setText(text + 1)}>btn+1</button></p>
      <button onClick={useCallback(() => onSubmit({ id: 1 }))}>test-btn</button>
    </div>
  );
}

export default Demo5;
