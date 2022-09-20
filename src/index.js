import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { Count } from './components/Count';
import { Fetch } from './components/Fetch';
import { WindowTracker } from './components/WindowTracker';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Count /> */}
    {/* <Fetch /> */}
    <App />
  </React.StrictMode>
)


// there are some things that are outside of React's purview

// localStorage
// sessionStorage
// API calls
// database interactions

// useEffect() allows us to do things that would normally be outside of React's scope


