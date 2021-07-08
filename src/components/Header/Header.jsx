
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
// import Logo from '../../images/waterfall.jpeg';


function Header() {

    // Material UI
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 500,
            flexGrow: 1,
        },
        control: {
            padding: 0,
            margin: 1,
        },
        header: {
            position: "relative",
            top: theme.spacing(0),
        },
    }));

    const classes = useStyles();
    // End Material UI

    const history = useHistory();

    return (
        <Grid
            container
            className={classes.header}
            spacing={2}
            alignItems="center"
            direction="column"
        >
            <h1>Hidden Hiking Gems:</h1>
            {/* <img
                src={Logo}
                alt="Hidden Hiking Gems"
                onClick={() => { history.push('/homePage') }}

            /> */}
        </Grid>
    )
}

export default Header;