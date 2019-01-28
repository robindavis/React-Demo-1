import React, { Component } from 'react';

import MainPage from './Components/MainPage/MainPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dummy from './Components/Dummy/Dummy';
import RobinRouter from './Components/RobinRouter/RobinRouter';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Dummy name='Yo world' />
      <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/dummy' render={(props)=><Dummy name='Robin'/>} />
      <RobinRouter path='/really' component={Dummy} />
      </Switch>
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
