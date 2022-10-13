import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Entry from './components/Entry';
import Port_A from './components/Port_A';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Entry} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
