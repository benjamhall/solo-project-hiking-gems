import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Material UI imports
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

function HomePage() {
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

    const history = useHistory();
    const user = useSelector((store) => store.user);

    return (
        <Grid
            container
            className={classes.root}
            spacing={2}
            alignItems="center"
            direction="column"
        >
            <Grid item xs={12}>
                <h2>Welcome, {user.username}!</h2>
            </Grid>
            <Grid item xs={12}>
                <p>We are so glad to have you join our Hiking Community of Adventurers dedicated to sharing Hidden Hiking Gems to help you get out and enjoy spending more time in nature!</p>
            </Grid>
            <Grid item xs={12}>
                <p>Check out our List of Hidden Hiking Gems:</p>
            </Grid>
            <Grid item xs={12}>
                <Button
                    className="btn"
                    variant="contained"
                    color="primary"
                    onClick={() => { history.push('/list') }}
                >
                    Let's Start Hiking!</Button>
            </Grid>
        </Grid>
    );
}

export default HomePage;
