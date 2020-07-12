import React, { useEffect, useState, useCallback } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// styles
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Ref from './components/Ref';
import UseCallback from './components/UseCallback';

function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  const [count, setCount] = useState(0);
  const increment = useCallback((n) => {
    setCount(c => c + n);
  },[setCount]);

  return (
    <div className="App container">
      <p className="flow-text center">Hooks</p>
      <Ref />
      <UseCallback increment={increment} />
      <p className="flow-text">
        count: {count}
      </p>
    </div>
  );
}

export default App;
