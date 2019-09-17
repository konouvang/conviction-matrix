import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import './LandingPage.css'
import { Paper, Typography, Button, Box, Grid, Container } from '@material-ui/core/';


class LandingPage extends Component {
    goToInfo = (event) => {
        this.props.history.push('/decision');
    }

    render() {
        return (
            <Container className="hero" maxWidth='md'>
                <Paper elevation={5} >
                    <Box m={3} p={2}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} >
                                <Typography gutterBottom={true} align="center" variant="h4">Welcome to </Typography>
                                <Typography gutterBottom={true} align="center" variant="h2">Conviction Matrix</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom={true}  align="center" variant="h6">Overview</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom={true}  align="center">Empower yourself to make the best decision</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom={true}  align="center">
                                    <Button variant="contained" color="primary" onClick={this.goToInfo}>GO!</Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        )
    }
};

export default connect(mapStateToProps)(LandingPage);
