import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// styles
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Ref from './components/Ref';

function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  return (
    <div className="App container">
      <p className="flow-text center">Hooks</p>
      <Ref />
    </div>
  );
}

export default App;
