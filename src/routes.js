import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Desenvolvimento from './pages/Desenvolvimento';
import Manutencao from './pages/Manutencao';
import Melhoria from './pages/Melhoria';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact exact component={Home} />
        <Route path="/desenvolvimento" exact component={Desenvolvimento} />
        <Route path="/manutencao" exact component={Manutencao} />
        <Route path="/melhoria" exact component={Melhoria} />
      </Switch>
    </BrowserRouter>
  );
}
