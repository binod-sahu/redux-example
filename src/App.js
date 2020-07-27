import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import UserContainer from './components/UserContainer'
import {Provider} from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <CakeContainer />
          <IceCreamContainer />
          <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
