import React from 'react';
import {Provider} from 'react-redux';
import List from '../Employees/Employees';
import {store} from '../../redux/configureStore';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';


export function App() {
  
  return (
    <BrowserRouter className="App">
      <Provider store={store}>
        <Switch>
          <Route path="/" component={List} exact/>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}