import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom'
import store from './store'
import Home from './components/Home'
import Strength from './components/Strength'
import Cardio from './components/Cardio'
import WeightLoss from './components/WeightLoss'
import { Provider } from 'react-redux'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <HashRouter>
          <Switch>
            <div className="App">
              <Route exact path="/strength" component={ Strength }/>
              <Route exact path="/cardio" component={ Cardio }/>
              <Route exact path="/weightLoss" component={ WeightLoss }/>
              <Route exact path="/" component={ Home }/>
            </div>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
