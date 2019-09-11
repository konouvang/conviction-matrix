import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, useScrollTrigger, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { MuiThemeProvider } from '@material-ui/core/styles';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func,
};

function Nav(props) {
  return (
    <MuiThemeProvider theme={props.theme}>
      <React.Fragment>
        <ElevationScroll {...props}>
          <AppBar >
            <Toolbar>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Typography align='center' color="secondary" variant="h5">Conviction Matrix</Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
export default connect(mapStateToProps)(Nav);