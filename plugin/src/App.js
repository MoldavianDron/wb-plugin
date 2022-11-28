import React from 'react';
import './App.css';
import PluginRoot from "./PluginRoot";

function App() {
  if (window.location.search === "") {
    return <PluginRoot />
  }
  return null;
}

export default App;
