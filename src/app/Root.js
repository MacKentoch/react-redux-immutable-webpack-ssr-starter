// @flow weak

/* eslint-disable no-process-env */
import React, {
  Component
}                               from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
}                               from 'react-router-dom';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore           from './redux/store/configureStore';
import { createBrowserHistory } from 'history';
import { fromJS }               from 'immutable';
import App                      from './containers/app/App';
import ScrollToTop              from './components/scrollToTop/ScrollToTop';
import Login                    from './views/login';
import PageNotFound             from './views/pageNotFound/PageNotFound'; // not connected to redux (no index.js)
import LogoutRoute              from './components/logoutRoute/LogoutRoute';


const preloadedState  = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const history       = createBrowserHistory();
const store         = configureStore(fromJS(preloadedState));
const syncedHistory = syncHistoryWithStore(
  history,
  store,
  {
    selectLocationState(state) {
      return state.get('routing').toJS();
    }
  }
);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={syncedHistory}>
            <ScrollToTop>
              <Switch>
                <Route exact path="/login" component={Login} />
                <App />
                {/* logout: just redirects to login (App will take care of removing the token) */}
                <LogoutRoute path="/logout" />
                <Route component={PageNotFound} />
              </Switch>
            </ScrollToTop>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default Root;
