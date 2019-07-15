import React from 'react';
import {Provider} from 'react-redux';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';
import {store} from '../../redux/configureStore';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Header} from '../Header';
import {HOME, EMPLOYEE} from '../../routes';
import {ErrorPage} from '../ErrorPage';
import './App.css';


export function App() {
  
  return (
    <BrowserRouter className="App">
      <Provider store={store}>
        <div>
          <Header/>
          <Switch>
            <Route path={HOME} component={EmployeesList} exact/>
            <Route path={EMPLOYEE} component={EmployeeDetails}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}