import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Movieapp from '../pages/Movieapp';

function App () {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Movieapp}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
