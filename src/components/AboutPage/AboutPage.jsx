import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  // Material UI
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
      margin: 'auto',
    },
  }));

  const classes = useStyles();
  // End Material UI

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      alignItems="center"
      direction="column"
    >
      <Grid item xs={12}>
        <h2>Welcome Adventurer!</h2>
      </Grid>
      <Grid item xs={9}>
        <p> Hidden Hiking Gems is a mobile friendly app designed to help hikers find beautiful hidden hiking trails and to a place to rate and keep track of their favorite trails.</p> 

        <Grid item xs={12}>
          <h2>Technology Used:</h2>
        </Grid>
        <p>JavaScript, React, Redux, Redux-Saga, Node, PostgreSQL, Express, Material UI</p>
        <Grid item xs={12}>
          <h2>Thank You!</h2>
        </Grid>
        <p>Prime Digital Academy, Dane our instructor and my fellow Genocchi Cohort. You all are real coders!</p>
      </Grid>
    </Grid>
  );
}

export default AboutPage;
