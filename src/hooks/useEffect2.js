import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`You clicked ${count} times`);
  }, [ ]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Add </button>
      <button onClick={() => setCount(count - 1)}>
        subtract
      </button>
    </div>
  );
}
  export default Example;