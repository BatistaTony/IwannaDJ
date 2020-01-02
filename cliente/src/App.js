import React from 'react';
import Content from './components/content';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Conta from './components/conta';
import Perfil from './components/perfil';
import { Provider } from 'react-redux'
import store from './components/store/index'

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
       <Route exact path="/home" component={Content} />
       <Route exact path="/Perfil" component={Perfil} />
       <Route exact path="/Conta" component={Conta} />
    </div>
    </Router>
    </Provider>
  );
}

export default App;
