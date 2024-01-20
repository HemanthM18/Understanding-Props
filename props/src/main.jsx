import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppClass from './Appclass.jsx'
import './index.css'
import DataComponent from './Components/DataComponent'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={DataComponent}/>
    <AppClass data={DataComponent}/>
  </React.StrictMode>
);
