/**
 * hook之useReducer
 */
import React, { useReducer } from 'react';

function reducer (state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'minus':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter () {
  const initState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'minus' })}>-</button>
    </div>
  );
}
export default Counter;
