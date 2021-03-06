import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import './App.css';
//pages
import LandingPage from '../LandingPage/LandingPage';
import DecisionParent from '../DecisionParent/DecisionParent';
import FactorParent from '../FactorParent/FactorParent';
import ScoreParent from '../ScoreParent/ScoreParent';


import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import SiteBackdrop from '../SiteBackdrop/SiteBackdrop';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#262626',
    },
    secondary: {
      light: '#F2F2F2',
      main: '#8C8C8C',
    },
  },
});

class App extends Component {
  // componentDidMount() {
  //   this.props.dispatch({ type: 'FETCH_USER' })
  // }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          {/* element with .site is in index.html */}
          <Nav theme={theme} />
          <div className="site-bd">
            <SiteBackdrop />
            <div className="container">
              <Switch>
                {/* A splash page is usually an informational page that talks
              to the purpose of the application to the user to get them to
              join up. */}
                <Route
                  exact
                  path="/"
                  component={LandingPage}
                />
                <Route
                  exact
                  path="/decision"
                  component={DecisionParent}
                />
                <Route
                  exact
                  path="/factor"
                  component={FactorParent}
                />
                <Route
                  exact
                  path="/score"
                  component={ScoreParent}
                />

                {/* If none of the other routes matched, we will show a 404. */}
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </div>
          </div>
          {/* END .site-bd */}

          <div className="site-ft">
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default connect(mapStateToProps)(App);
