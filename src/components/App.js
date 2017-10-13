import "../style/style.css";
import "materialize-css/dist/css/materialize.min.css";
import React from 'react'
import { Provider, connect } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter} from 'react-router-redux'

import Header from './header/Header'
import Dashboard from './dashboard/Dashboard'
import MovieDetails from './details/MovieDetails'
import * as actions from '../actions'


const history = createHistory()

const App = ({ store }) => (
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
        <Header />
        <div className="container">
            <Route exact path="/" component={Dashboard}/>
            <Route path="/movie/:movieID" component={MovieDetails }/>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);


export default connect(null, actions)(App);
