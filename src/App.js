import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import moment from 'moment';
import momentTZ from 'moment-timezone';
import 'moment/locale/ru';

import DefaultLayout from './layouts/default';

import './App.scss';

import {setLoading, setAuthenticate, resetStore} from './actions/main';

const App = (props) => {

  window.moment = moment;
  momentTZ.tz.setDefault('Asia/Yekaterinburg');

  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route
          path="/"
          name="Home"
          render={props => <DefaultLayout {...props} />}
        />
      </Switch>
    </ConnectedRouter>
  );
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isAuthenticate: PropTypes.bool,
  token: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  userData: PropTypes.object.isRequired,

  setLoading: PropTypes.func.isRequired,
  setAuthenticate: PropTypes.func.isRequired,
  resetStore: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => {
  return {...store.main};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (load) => dispatch(setLoading(load)),
    setAuthenticate: (auth) => dispatch(setAuthenticate(auth)),
    resetStore: () => dispatch(resetStore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
