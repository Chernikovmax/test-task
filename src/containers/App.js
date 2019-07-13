import React from 'react';
import {Provider} from 'react-redux';
import List from './Employees';
import {store} from '../redux/configureStore';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <List />
      </Provider>
    </div>
  );
}

export default App;