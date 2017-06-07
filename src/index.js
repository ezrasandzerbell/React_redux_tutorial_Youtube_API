import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBjF4kwT9xynf4BCZzlhY2JF-AxYXVGagc';

// Create a new component that will produce some html
const APP = () => {
  return <div>Hi!</div>
}

// Take the component's HTML and put it on the page (in dom)

ReactDOM.render(<App />, document.querySelector('.container'))
