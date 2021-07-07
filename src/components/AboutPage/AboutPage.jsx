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
        <Typography variant="h5">Welcome to Hidden Hiking Gems</Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography
          variant="body1"
        >
          Have you ever wanted to know what are the top rated Hiking Spots in Minnesota?

          If so, you have come to the right place!
          
          We are so glad to have you join our Hiking Community of Adventurers who are dedicated to sharing the best hiking trails around to help you get out and enjoy spending time in nature.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AboutPage;
