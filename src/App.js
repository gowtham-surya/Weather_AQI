import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Entry from './components/Entry';
import Port_A from './components/Port_A';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact component={Entry} />
      <Route path="/port_A" component={Port_A} />
      <Route path="/port_B" component={Port_A} />
      <Route path="/port_C" component={Port_A} />
    </Routes>
  );
};

export default App;
