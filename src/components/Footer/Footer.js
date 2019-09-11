import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    color: '#8C8C8C',
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems='center'
              className={classes.iconsWrapper}
              spacing={1}
            >
              <Grid item>
                <Typography align="center" variant="caption" display="block" gutterBottom={true}>
                  Suits for Hire |
                  1301 Oak St. Suite 705 Kansas City, MO 64106 |
                  suitsforhire@yahoo.com |
                  Copyright © 2019 Suits for Hire - All Rights Reserved
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}