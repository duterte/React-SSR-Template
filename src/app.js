import React from 'react';

function App() {
  function clickHandler() {
    console.log('js handler');
  }

  return (
    <>
      <h1>Hello World</h1>
      <p>Some Content</p>
      <button onClick={clickHandler}>Console log some text</button>
    </>
  );
}

export default App;
